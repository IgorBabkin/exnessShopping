export function participantsToBoolean(participants: number): boolean[] {
    const persons = [];
    const maxParticipants = 12;

    for (let i = 0; i < maxParticipants; i++) {
        persons.push(i < participants);
    }

    return persons;
}