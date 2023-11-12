import { Carousel } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import axios from 'axios';


const Home = ({ searchValue }) => {

    //Bütün veriler için state
    const [allNews, setAllNews] = useState([]);
    
    //Slider verileri için state(ilk üç haber)
    const [slider, setSlider] = useState([]);

    //İlk üç haberden sonraki haberler
    const [otherNews, setOtherNews] = useState([]);


    //Çektiğimiz apilerin sayfa açıldığında görülenmesi için useEffect
    useEffect(() => {
        const getResponse = async () => {
            const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=a696c20c66a14d83b49a0e92733c1675');
            const data = response.data;
            console.log(data);
            const allNews = data.articles;
            const slider = allNews.slice(0, 3);
            const otherNews = allNews.slice(3);

            setAllNews(allNews);
            setSlider(slider);
            setOtherNews(otherNews);
        }
        getResponse();
    }, [])


    //otherNews array’indeki apiler, searchValue değerine göre filtrelendi.
    const filteredOtherNews = otherNews.filter((news) =>
    news.title.toLowerCase().includes(searchValue.toLowerCase())
  );

    return (
        <div className="mx-auto max-w-6xl">
            <div className="px-14">

                {/* Slider için hazır bir component kullanıdı */}
                <Carousel className="rounded-xl">
                    {
                        slider.map((item, i) => (
                            <a href={item.url} target="blank" key={i} className="h-full w-full">
                                <img src={item.urlToImage} className="h-[500px] w-full object-cover rounded-xl" />
                                <h1 className="font-bold pt-2 text-xl">{item.title}</h1>
                                <p className="text-lg">{item.description}</p>
                            </a>
                        ))
                    }

                </Carousel>
            </div>

            <div className="pt-20">


                {
                    filteredOtherNews.map((item, i) => (
                        <a href={item.url} target="blank" key={i} className="mx-14 md-mx-0 pt-4 pb-20 items-center md:items-start flex flex-col md:flex-row md:gap-x-6">
                            <img src={item.urlToImage} className="md:w-1/2 object-cover" />
                            <div className="md:border-t md:border-black md:w-1/2">
                                <h1 className="font-bold text-xl md:py-4 py-2">{item.title}</h1>
                                <p className="text-lg">{item.description}</p>
                            </div>
                        </a>
                    ))
                }
            </div>
            
        </div>
    )
}

export default Home