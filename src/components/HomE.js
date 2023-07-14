import React, { useEffect, useState } from 'react'

const HomE = () => {
    const [data, setdata] = useState([])


    const f = async () => {
        let response = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=99b476fd62064c03b3383d0f5b04d2a3')
        let res = await response.json();
        setdata(res);
    }
    useEffect(() => {
        f();
    }, [])
    return (
        <div>
            
            {data.articles.map((article, index) => (
                <>
                    <div className="px-4 py-5 my-5 text-center">
                        <h1 className="display-5 fw-bold text-body-emphasis" key={index}>{article.title}</h1>
                        <div className="col-lg-6 mx-auto">
                            <p className="lead mb-4" key={index}>{article.description}
                            </p>
                            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                                <a type="button" href={`${article.url}`} className="btn btn-primary btn-lg px-4 gap-3" key={index}>
                                    Read more..
                                </a>
                            </div>
                        </div>
                    </div>
                    <hr className="b-example-divider" />
                    <br/>
                    <br/>
                    <hr className="b-example-divider" />
                </>
            ))}

        </div>
    )
}

export default HomE
