export class Heart {

  public isFull: boolean;
  public emptyHeart: String;
  public fullHeart: String;

  constructor(isFull: boolean) {
    this.isFull = isFull;
    this.emptyHeart = '/assets/empty_heart.png';
    this.fullHeart = '/assets/full_heart.png';

  }

  public checkHeart(): String {
    if (this.isFull) {
      return this.fullHeart;
    } else {
      return this.emptyHeart;
    }
  }
}
