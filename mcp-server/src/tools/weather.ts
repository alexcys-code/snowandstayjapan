// Weather tool — Open-Meteo JMA API (free, no auth)
// Covers Yatsugatake area: lat ~35.87, lng ~138.32

export const YATSUGATAKE_LAT = 35.87;
export const YATSUGATAKE_LNG = 138.32;

export interface WeatherResult {
  location: string;
  latitude: number;
  longitude: number;
  timezone: string;
  current?: {
    time: string;
    temperature_2m: number;
    apparent_temperature: number;
    precipitation: number;
    windspeed_10m: number;
    weathercode: number;
    weather_description: string;
  };
  hourly_forecast?: Array<{
    time: string;
    temperature_2m: number;
    precipitation_probability: number;
    precipitation: number;
    weathercode: number;
    weather_description: string;
  }>;
  daily_forecast?: Array<{
    date: string;
    temperature_max: number;
    temperature_min: number;
    precipitation_sum: number;
    precipitation_probability_max: number;
    weathercode: number;
    weather_description: string;
    sunrise: string;
    sunset: string;
  }>;
}

// WMO weather interpretation codes
function describeWeatherCode(code: number): string {
  const codes: Record<number, string> = {
    0: 'Clear sky',
    1: 'Mainly clear', 2: 'Partly cloudy', 3: 'Overcast',
    45: 'Foggy', 48: 'Depositing rime fog',
    51: 'Light drizzle', 53: 'Moderate drizzle', 55: 'Dense drizzle',
    61: 'Slight rain', 63: 'Moderate rain', 65: 'Heavy rain',
    71: 'Slight snow', 73: 'Moderate snow', 75: 'Heavy snow',
    77: 'Snow grains',
    80: 'Slight rain showers', 81: 'Moderate rain showers', 82: 'Violent rain showers',
    85: 'Slight snow showers', 86: 'Heavy snow showers',
    95: 'Thunderstorm', 96: 'Thunderstorm with slight hail', 99: 'Thunderstorm with heavy hail',
  };
  return codes[code] ?? `Weather code ${code}`;
}

export async function getWeather(args: {
  lat?: number;
  lng?: number;
  location_name?: string;
  include_hourly?: boolean;
  include_daily?: boolean;
  days?: number;
}): Promise<WeatherResult> {
  const lat = args.lat ?? YATSUGATAKE_LAT;
  const lng = args.lng ?? YATSUGATAKE_LNG;
  const days = Math.min(args.days ?? 7, 16);
  const locationName = args.location_name ?? 'Yatsugatake';

  const params = new URLSearchParams({
    latitude: String(lat),
    longitude: String(lng),
    timezone: 'Asia/Tokyo',
    forecast_days: String(days),
    current: 'temperature_2m,apparent_temperature,precipitation,windspeed_10m,weathercode',
  });

  if (args.include_hourly !== false) {
    params.set('hourly', 'temperature_2m,precipitation_probability,precipitation,weathercode');
  }
  if (args.include_daily !== false) {
    params.set('daily', 'temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max,weathercode,sunrise,sunset');
  }

  const url = `https://api.open-meteo.com/v1/jma?${params}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Open-Meteo API error: ${res.status} ${res.statusText}`);
  const data = await res.json() as any;

  const result: WeatherResult = {
    location: locationName,
    latitude: lat,
    longitude: lng,
    timezone: data.timezone,
  };

  if (data.current) {
    result.current = {
      time: data.current.time,
      temperature_2m: data.current.temperature_2m,
      apparent_temperature: data.current.apparent_temperature,
      precipitation: data.current.precipitation,
      windspeed_10m: data.current.windspeed_10m,
      weathercode: data.current.weathercode,
      weather_description: describeWeatherCode(data.current.weathercode),
    };
  }

  if (data.hourly && args.include_hourly !== false) {
    // Return next 48 hours only to keep response manageable
    const times: string[] = data.hourly.time;
    const limit = Math.min(48, times.length);
    result.hourly_forecast = times.slice(0, limit).map((time: string, i: number) => ({
      time,
      temperature_2m: data.hourly.temperature_2m[i],
      precipitation_probability: data.hourly.precipitation_probability[i],
      precipitation: data.hourly.precipitation[i],
      weathercode: data.hourly.weathercode[i],
      weather_description: describeWeatherCode(data.hourly.weathercode[i]),
    }));
  }

  if (data.daily && args.include_daily !== false) {
    result.daily_forecast = data.daily.time.map((date: string, i: number) => ({
      date,
      temperature_max: data.daily.temperature_2m_max[i],
      temperature_min: data.daily.temperature_2m_min[i],
      precipitation_sum: data.daily.precipitation_sum[i],
      precipitation_probability_max: data.daily.precipitation_probability_max[i],
      weathercode: data.daily.weathercode[i],
      weather_description: describeWeatherCode(data.daily.weathercode[i]),
      sunrise: data.daily.sunrise[i],
      sunset: data.daily.sunset[i],
    }));
  }

  return result;
}
