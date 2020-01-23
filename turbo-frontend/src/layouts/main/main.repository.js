export class MainRepository {
  async getOffers() {
    const response = await fetch("http://localhost/api/offers");
    return await response.json();
  }
  async getOfferById(id){
    const response = await fetch(`http://localhost/api/offers/${id}`)
    return await response.json();
  }
}
