export class Marcador {
    constructor(
        public lat: number,
        public lng: number,
        public titulo: string = 'sin titulo',
        public desc: String = 'sin descripción') {
        this.lat = lat;
        this.lng = lng;
    }
}