// http://localhost:3000/api/weather

import { NextRequest, NextResponse } from "next/server";

export async function GET(request) {
  const apiKey = process.env.WEATHER_API_KEY;
  const city = 'Jabalpur'; // Set the city here
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  
  const res = await fetch(url);
  const data = await res.json();

  // Include the city name in the response
  return NextResponse.json({ data: { ...data, city } });
}
