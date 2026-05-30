# Yatsugatake MCP Server — Setup

## Build

```bash
cd mcp-server
npm install
npm run build
```

## Add to Claude Desktop

Edit `~/Library/Application Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "yatsugatake": {
      "command": "node",
      "args": ["/Users/alexcys/Documents/Claude/Projects/Website/mcp-server/dist/index.js"]
    }
  }
}
```

Restart Claude Desktop. The server exposes 7 tools:

| Tool | Data source |
|---|---|
| `get_weather` | Open-Meteo JMA API (free, no auth) |
| `get_hiking_trails` | Overpass API (OpenStreetMap) |
| `get_elevation` | GSI Japan 国土地理院 |
| `get_pois` | Overpass API (attractions, viewpoints, huts, shrines…) |
| `get_accommodation` | Curated + Overpass API |
| `get_restaurants` | Curated + Overpass API |
| `get_itinerary` | Curated 4-day May 2026 itinerary |

## Example queries in Claude Desktop

- *"What's the weather in Yatsugatake this week?"*
- *"List easy hiking trails near Kobuchizawa with elevation data"*
- *"What shrines and viewpoints are in Yatsugatake?"*
- *"Find soba restaurants in Yatsugatake"*
- *"What's on Day 2 of the Yatsugatake itinerary?"*
- *"What's the elevation at lat 35.87, lon 138.32?"*
