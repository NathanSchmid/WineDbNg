export class State {
  constructor(public id: number,
    public name: string) { }

    public static fromObjects(rawStates: any): State[] {
      const states = [];
      if (!rawStates) {
        return states;
      }
      for (const rawState of rawStates) {
        states.push(State.fromObject(rawState));
      }
      return states;
    }

    public static fromObject(rawState: any): State {
      if (!rawState) {
        return null;
      }
      return new State(rawState.Id,
        rawState.Name
      );
    }
}
