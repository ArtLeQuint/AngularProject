export class Translations {
   de: string;
   es: string;
   fr: string;
   ja: string;
   it: string;
   br: string;
   pt: string;
   nl: string;
   hr: string;
   fa: string;

   public toString(): string {
      return 'DE: ' + this.de +
           ', ES: ' + this.es +
           ', FR: ' + this.fr +
           ', IT: ' + this.it +
           ', BR: ' + this.br +
           ', PT: ' + this.pt +
           ', NL: ' + this.nl +
           ', HR: ' + this.hr +
           ', FA: ' + this.fa +
           ', JA: ' + this.ja;
   }
}
