export function getAppointmentsForDay(state, day) {
  const appointmentsArray = [];
  const days = [...state.days];
  const appointments = { ...state.appointments };
  const today = days.filter((days) => days.name === day);
  const todayAppointment = today[0] && today[0].appointments; // se requerer dia em appointments retorno todos os apointments para o dia
  todayAppointment &&
    todayAppointment.map((app) => appointmentsArray.push(appointments[app])); // se tiver appointments, salvo no array

  return appointmentsArray;
}

export function getInterview(state, interview) {
  if (!interview) return null;
  let result = "";
  const interviewer = state.interviewers[interview.interviewer];
  if (interviewer) {
    // Checando se interviewer esta na lista de interviewers
    result = {
      ...interview,
      interviewer: {
        id: interviewer.id,
        name: interviewer.name,
        avatar: interviewer.avatar,
      },
    };
  } else {
    result = null;
  }
  return result;
}

export function getInterviewersForDay(state, day) {
  const interviewersArray = [];
  const days = [...state.days];
  const interviewers = { ...state.interviewers };
  const today = days.filter((d) => d.name === day);
  // if requested day is in appointments, return all the appointments for today
  const todaysInterviewers = today[0] && today[0].interviewers;
  // if there are appointments, push them to appointmentsArray
  todaysInterviewers &&
    todaysInterviewers.map((i) => interviewersArray.push(interviewers[i]));

  return interviewersArray;
}
