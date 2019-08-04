import { observable, action, runInAction } from "mobx";

const getData = async () => {
  const data = await new Promise((resovle, reject)=> {
    setTimeout(() => {
      const d = [];
      const c = Math.random() * 10;
      for(let i =0;i< c;i++){
        d.push(i);
      }
      resovle(d)
    }, 500);
  });
  return data;
}
class Store {
  @observable list = [];
  @observable loading = false;

  @action
  getData = async () => {
    this.setLoading();
    const data = await getData();
    runInAction(() => {
      this.list = data;
      this.loading = false;
    })
    console.log(data)
    // this.list = [];
  };
  setLoading = () => {
    this.loading = true;
  }
  reset = () => {
    this.list = [];
  }
}
export default new Store();
