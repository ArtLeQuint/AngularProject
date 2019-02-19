export class Translations {
   de = '';
   es = '';
   fr = '';
   ja = '';
   it = '';
   br = '';
   pt = '';
   nl = '';
   hr = '';
   fa = '';

   public toString(): string {
      return 'de:' + this.de + ', es:' + this.es + ', fr:' + this.fr
       + ', ja:' + this.ja + ', it:' + this.it + ', br:' + this.br
        + ', pt:' + this.pt + ', nl:' + this.nl + ', hr:' + this.hr + ', fa:' + this.fa;
   }
}
