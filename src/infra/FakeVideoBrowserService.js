export class FakeVideoBrowserService {
  search(query){
    console.log(query);
    return [
      { id: 1, title: "The jump of the cat" },
      { id: 2, title: "Vue vs React" },
    ];
  }
}