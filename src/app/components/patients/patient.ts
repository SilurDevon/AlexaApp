export interface Patient {
  bewohner_id: number;
  nachname: string;
  vorname: string;
  zimmernummer: number;
  wohnbereich: string;
  pflegegrad: number;
  geburtsdatum: Date;
  geschlecht: string;
}
