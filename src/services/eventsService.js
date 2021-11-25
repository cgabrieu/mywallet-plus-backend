export function sumEvents(events) {
  return events.reduce(
    (total, event) =>
      event.type === "INCOME" ? total + event.value : total - event.value,
    0
  );
}
