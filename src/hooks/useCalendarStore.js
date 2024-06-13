import { useDispatch, useSelector } from "react-redux";
import { onAddNewEvent, onSetActiveEvent } from "../store";

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state) => state.calendar);

  const setActiveEvent = (calenderEvent) => {
    dispatch(onSetActiveEvent(calenderEvent));
  };

  const startSavingEvent = async (calendarEvent) => {
    // TODO: llegar al backend

    // Todo bien
    if (calendarEvent._id) {
      // Actualizando
    } else {
      console.log(
        "🚀 ~ startSavingEvent ~ calendarEvent._id:",
        calendarEvent._id
      );

      {
        //Creando
        dispatch(
          onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() })
        );
      }
    }
  };

  return {
    //* Propiedades
    activeEvent,
    events,

    //*Métodos
    setActiveEvent,
    startSavingEvent,
  };
};
