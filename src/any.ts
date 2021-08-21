import axios from 'axios';

export {};

const url: string = 'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

axios.get(url).then(function (response) {
    interface Article {
        id: number,
        title : string,
        description: string,
    }
    let data: Article[] = response.data;  // 型推論ができないものはany型
    data.push(
        {
            id: 1,
            title: "title",
            description: "description",
        }
    );
    console.log(data);
}).catch(function (error) {
    console.log(error.message);
});