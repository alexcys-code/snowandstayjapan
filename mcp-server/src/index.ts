#!/usr/bin/env node
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';

import { getWeather } from './tools/weather.js';
import { getSkiAreas } from './tools/ski.js';
import { getTrailElevationProfile } from './tools/trails.js';
import { getPois } from './tools/pois.js';
import { getAccommodation, getRestaurants } from './tools/places.js';
import { getItinerary } from './tools/itinerary.js';

const server = new Server(
  { name: 'mcp-yatsugatake', version: '1.0.0' },
  { capabilities: { tools: {} } }
);

// ─── Tool definitions ────────────────────────────────────────────────────────

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: 'get_weather',
      description:
        'Get current weather and forecast for Yatsugatake (or any lat/lon in the area). Uses Open-Meteo JMA data. Returns current conditions, 48-hour hourly forecast, and multi-day daily forecast.',
      inputSchema: {
        type: 'object',
        properties: {
          lat: { type: 'number', description: 'Latitude (default: 35.87 — Yatsugatake center)' },
          lng: { type: 'number', description: 'Longitude (default: 138.32)' },
          location_name: { type: 'string', description: 'Human-readable name for the location' },
          include_hourly: { type: 'boolean', description: 'Include 48-hour hourly forecast (default: true)' },
          include_daily: { type: 'boolean', description: 'Include daily forecast (default: true)' },
          days: { type: 'number', description: 'Number of forecast days (1–16, default: 7)' },
        },
      },
    },
    {
      name: 'get_ski_areas',
      description:
        'List ski resorts and ski areas in the Yatsugatake region. Returns resort details including vertical drop, piste counts by difficulty, lift counts, night skiing availability, season dates, and pricing. Combines curated data with live OpenStreetMap data.',
      inputSchema: {
        type: 'object',
        properties: {
          include_osm: {
            type: 'boolean',
            description: 'Also fetch from OpenStreetMap in addition to curated data (default: true)',
          },
          night_skiing_only: {
            type: 'boolean',
            description: 'Return only resorts with night skiing',
          },
          min_vertical_m: {
            type: 'number',
            description: 'Minimum vertical drop in metres',
          },
        },
      },
    },
    {
      name: 'get_elevation',
      description:
        'Get the elevation in metres for any coordinate in Japan using the GSI Japan (国土地理院) elevation API.',
      inputSchema: {
        type: 'object',
        required: ['lat', 'lon'],
        properties: {
          lat: { type: 'number', description: 'Latitude' },
          lon: { type: 'number', description: 'Longitude' },
          name: { type: 'string', description: 'Optional label for this point' },
        },
      },
    },
    {
      name: 'get_pois',
      description:
        'Get points of interest in Yatsugatake from OpenStreetMap: attractions, viewpoints, alpine huts, hot springs, waterfalls, shrines, temples, nature reserves.',
      inputSchema: {
        type: 'object',
        properties: {
          category: {
            type: 'string',
            enum: ['attraction', 'viewpoint', 'alpine_hut', 'museum', 'park', 'hot_spring', 'waterfall', 'shrine', 'temple', 'all'],
            description: 'Filter by category (default: all)',
          },
          keyword: { type: 'string', description: 'Search keyword (matches name, description, category)' },
          limit: { type: 'number', description: 'Max results (default: 30)' },
        },
      },
    },
    {
      name: 'get_accommodation',
      description:
        'List accommodation options in Yatsugatake. Combines curated data (Risonare, Bleston Court, local pensions) with live OpenStreetMap data.',
      inputSchema: {
        type: 'object',
        properties: {
          type: {
            type: 'string',
            enum: ['hotel', 'guesthouse', 'pension', 'ryokan', 'campsite', 'all'],
            description: 'Filter by accommodation type (default: all)',
          },
          include_osm: {
            type: 'boolean',
            description: 'Also fetch from OpenStreetMap in addition to curated data (default: true)',
          },
          limit: { type: 'number', description: 'Max results (default: 20)' },
        },
      },
    },
    {
      name: 'get_restaurants',
      description:
        'List restaurants and cafés in Yatsugatake. Combines curated data (Toramaru Soba, Café Rosa, Genbe, Farm Kitchen, Risonare kaiseki) with live OpenStreetMap data.',
      inputSchema: {
        type: 'object',
        properties: {
          cuisine: { type: 'string', description: 'Filter by cuisine type (e.g. soba, kaiseki, italian, cafe)' },
          include_osm: {
            type: 'boolean',
            description: 'Also fetch from OpenStreetMap (default: true)',
          },
          limit: { type: 'number', description: 'Max results (default: 20)' },
        },
      },
    },
    {
      name: 'get_itinerary',
      description:
        'Get the curated 4-day Yatsugatake travel itinerary (May 2026). Returns day-by-day activities, transport tips, and links. Optionally fetch a single day.',
      inputSchema: {
        type: 'object',
        properties: {
          day: {
            type: 'number',
            description: 'Return a specific day only (1–4). Omit for the full itinerary.',
          },
        },
      },
    },
  ],
}));

// ─── Tool dispatch ───────────────────────────────────────────────────────────

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args = {} } = request.params;

  try {
    let result: unknown;

    switch (name) {
      case 'get_weather':
        result = await getWeather(args as any);
        break;
      case 'get_ski_areas':
        result = await getSkiAreas(args as any);
        break;
      case 'get_elevation':
        result = await getTrailElevationProfile(args as any);
        break;
      case 'get_pois':
        result = await getPois(args as any);
        break;
      case 'get_accommodation':
        result = await getAccommodation(args as any);
        break;
      case 'get_restaurants':
        result = await getRestaurants(args as any);
        break;
      case 'get_itinerary':
        result = getItinerary(args as any);
        break;
      default:
        return {
          content: [{ type: 'text', text: `Unknown tool: ${name}` }],
          isError: true,
        };
    }

    return {
      content: [{ type: 'text', text: JSON.stringify(result, null, 2) }],
    };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return {
      content: [{ type: 'text', text: `Error: ${message}` }],
      isError: true,
    };
  }
});

// ─── Start ───────────────────────────────────────────────────────────────────

const transport = new StdioServerTransport();
await server.connect(transport);
