import * as eventsRepository from "../repositories/eventsRepository.js";
import * as eventsService from "../services/eventsService.js";

export async function createFinancialEvent(req, res) {
  try {
    const { value, type } = req.body;

    if (!value || !type) {
      return res.sendStatus(400);
    }

    if (!["INCOME", "OUTCOME"].includes(type)) {
      return res.sendStatus(400);
    }

    if (value < 0) {
      return res.sendStatus(400);
    }

    await eventsRepository.createFinancialEvent(req.userId, value, type);

    return res.sendStatus(201);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

export async function getFinancialEvents(req, res) {
  const events = await eventsRepository.getFinancialEvents(req.userId);
  res.send(events);
}

export async function getSumFinancialEvents(req, res) {
  const events = await eventsRepository.getFinancialEvents(req.userId);
  const sum = eventsService.sumEvents(events);
  res.send({ sum });
}
