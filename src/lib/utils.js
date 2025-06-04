export async function fetchAvailableAppointments(dateFrom, dateTo) {
  const url = new URL("https://getavailableappointments-4f6qjip22a-uc.a.run.app");
  url.searchParams.append("date_from", dateFrom);
  url.searchParams.append("date_to", dateTo);

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error("Failed to fetch appointments");
  }

  const data = await response.json();
  console.log(data);
  return data.appointments;
}