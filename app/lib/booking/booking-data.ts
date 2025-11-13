import { BookingConfig } from "./types";

export const bookingConfig: BookingConfig = {
  "projectMeta": {
    "title": "Simple Booking Interface",
    "description": "A simple counselling booking UI to select and confirm one time slot from a weekly view.",
    "timezone": "Europe/London"
  },
  "uiConfig": {
    "slotDurationMinutes": 60,
    "workdayStart": "09:00",
    "workdayEnd": "17:00",
    "maxSlotsPerDay": 8,
    "allowSingleSelectionOnly": true,
    "showOnlyAvailableDaysFilterDefault": false,
    "enableDarkModeToggle": true,
    "enableSlotStatusIndicator": true,
    "enableToastNotifications": true,
    "enableFramerMotionAnimations": true
  },
  "stateConfig": {
    "useReducerPreferred": true,
    "persistKey": "simple-booking-interface-v1",
    "persistToLocalStorage": true
  },
  "week": {
    "startDate": "2025-11-17",
    "endDate": "2025-11-23"
  },
  "service": {
    "id": "counselling-standard-50min",
    "name": "Individual Counselling Session",
    "durationMinutes": 50,
    "locationType": "online",
    "counsellor": {
      "id": "cslr-001",
      "name": "Alex Taylor",
      "displayName": "Alex T.",
      "qualifications": ["BACP Registered"],
      "note": "Example only – hardcoded for UI demo."
    }
  },
  "days": [
    {
      "date": "2025-11-17",
      "label": "Mon",
      "isBookableDay": true,
      "slots": [
        { "id": "2025-11-17T09:00", "time": "09:00", "status": "available" },
        { "id": "2025-11-17T10:00", "time": "10:00", "status": "available" },
        { "id": "2025-11-17T11:00", "time": "11:00", "status": "booked" },
        { "id": "2025-11-17T12:00", "time": "12:00", "status": "available" },
        { "id": "2025-11-17T13:00", "time": "13:00", "status": "available" },
        { "id": "2025-11-17T14:00", "time": "14:00", "status": "available" },
        { "id": "2025-11-17T15:00", "time": "15:00", "status": "booked" },
        { "id": "2025-11-17T16:00", "time": "16:00", "status": "available" }
      ]
    },
    {
      "date": "2025-11-18",
      "label": "Tue",
      "isBookableDay": true,
      "slots": [
        { "id": "2025-11-18T09:00", "time": "09:00", "status": "available" },
        { "id": "2025-11-18T10:00", "time": "10:00", "status": "available" },
        { "id": "2025-11-18T11:00", "time": "11:00", "status": "available" },
        { "id": "2025-11-18T12:00", "time": "12:00", "status": "booked" },
        { "id": "2025-11-18T13:00", "time": "13:00", "status": "available" },
        { "id": "2025-11-18T14:00", "time": "14:00", "status": "available" },
        { "id": "2025-11-18T15:00", "time": "15:00", "status": "available" },
        { "id": "2025-11-18T16:00", "time": "16:00", "status": "available" }
      ]
    },
    {
      "date": "2025-11-19",
      "label": "Wed",
      "isBookableDay": true,
      "slots": [
        { "id": "2025-11-19T09:00", "time": "09:00", "status": "booked" },
        { "id": "2025-11-19T10:00", "time": "10:00", "status": "booked" },
        { "id": "2025-11-19T11:00", "time": "11:00", "status": "available" },
        { "id": "2025-11-19T12:00", "time": "12:00", "status": "available" },
        { "id": "2025-11-19T13:00", "time": "13:00", "status": "available" },
        { "id": "2025-11-19T14:00", "time": "14:00", "status": "available" },
        { "id": "2025-11-19T15:00", "time": "15:00", "status": "available" },
        { "id": "2025-11-19T16:00", "time": "16:00", "status": "available" }
      ]
    },
    {
      "date": "2025-11-20",
      "label": "Thu",
      "isBookableDay": true,
      "slots": [
        { "id": "2025-11-20T09:00", "time": "09:00", "status": "available" },
        { "id": "2025-11-20T10:00", "time": "10:00", "status": "available" },
        { "id": "2025-11-20T11:00", "time": "11:00", "status": "available" },
        { "id": "2025-11-20T12:00", "time": "12:00", "status": "available" },
        { "id": "2025-11-20T13:00", "time": "13:00", "status": "booked" },
        { "id": "2025-11-20T14:00", "time": "14:00", "status": "available" },
        { "id": "2025-11-20T15:00", "time": "15:00", "status": "available" },
        { "id": "2025-11-20T16:00", "time": "16:00", "status": "available" }
      ]
    },
    {
      "date": "2025-11-21",
      "label": "Fri",
      "isBookableDay": true,
      "slots": [
        { "id": "2025-11-21T09:00", "time": "09:00", "status": "available" },
        { "id": "2025-11-21T10:00", "time": "10:00", "status": "booked" },
        { "id": "2025-11-21T11:00", "time": "11:00", "status": "available" },
        { "id": "2025-11-21T12:00", "time": "12:00", "status": "available" },
        { "id": "2025-11-21T13:00", "time": "13:00", "status": "available" },
        { "id": "2025-11-21T14:00", "time": "14:00", "status": "available" },
        { "id": "2025-11-21T15:00", "time": "15:00", "status": "available" },
        { "id": "2025-11-21T16:00", "time": "16:00", "status": "booked" }
      ]
    },
    {
      "date": "2025-11-22",
      "label": "Sat",
      "isBookableDay": false,
      "slots": []
    },
    {
      "date": "2025-11-23",
      "label": "Sun",
      "isBookableDay": false,
      "slots": []
    }
  ],
  "initialBookings": [
    { "slotId": "2025-11-17T11:00", "status": "booked", "source": "seed" },
    { "slotId": "2025-11-17T15:00", "status": "booked", "source": "seed" },
    { "slotId": "2025-11-18T12:00", "status": "booked", "source": "seed" },
    { "slotId": "2025-11-19T09:00", "status": "booked", "source": "seed" },
    { "slotId": "2025-11-19T10:00", "status": "booked", "source": "seed" },
    { "slotId": "2025-11-20T13:00", "status": "booked", "source": "seed" },
    { "slotId": "2025-11-21T10:00", "status": "booked", "source": "seed" },
    { "slotId": "2025-11-21T16:00", "status": "booked", "source": "seed" }
  ]
};
