export class Employee {
  public name: string;
  public id: number;
  public attendance: boolean;

  constructor(name: string, id: number, attendance: boolean) {
    this.name = name;
    this.id = id;
    this.attendance = attendance;
  }
}
