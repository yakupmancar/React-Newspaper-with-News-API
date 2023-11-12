import axios from "axios";
import { useEffect, useState } from "react"

const Business = ({ searchValue }) => {

    //Çektiğimiz apileri tutmak ve güncellenmesini sağlamak için bir state
    const [datas, setDatas] = useState([]);

    
    //Çektiğimiz apilerin sayfa açıldığında görülenmesi için useEffect oluşturuldu
    useEffect(() => {
        const getResp = async () => {
            const { data } = await axios.get('https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=a696c20c66a14d83b49a0e92733c1675');
            // console.log(data.articles);
            setDatas(data.articles);
        }
        getResp();
    }, [])

    
    //Input alanındaki filtreleme işleminin yapılması için bir fonksiyon oluşturuldu
    const filteredDatas = datas.filter((data) =>
        data.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (

        <div>


            {
                filteredDatas.map((data, i) => (
                    <a href={data.url} target="blank" key={i} className="px-4 lg:px-0 pt-4 pb-14 flex flex-col lg:flex-row gap-x-7">
                        <img src={data.urlToImage} className="lg:w-1/2 h-64 rounded" />
                        <div className="lg:w-1/2 lg:text-lg md:border-t md:border-black">
                            <h2 className="font-bold py-2 lg:text-xl">{data.title}</h2>
                            <h1>{data.description}</h1>
                        </div>
                    </a>
                ))
            }

        </div>
    )
}

export default Business