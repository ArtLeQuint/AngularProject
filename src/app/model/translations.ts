export class Translations {
   de: string = '';
   es: string = '';
   fr: string = '';
   ja: string = '';
   it: string = '';
   br: string = '';
   pt: string = '';
   nl: string = '';
   hr: string = '';
   fa: string = '';

   public toString(): string {
      return 'de:' + this.de + ', es:' + this.es + ', fr:' + this.fr + ', ja:' + this.ja + ', it:' + this.it + ', br:' + this.br + ', pt:' + this.pt + ', nl:' + this.nl + ', hr:' + this.hr + ', fa:' + this.fa;
   }
}