import React from "react"



const CardList = ({ cards }) => {


    return (
        <div className="d-flex w-100 flex-wrap justify-content-center">
            {cards.map(card => {
                return (<div key={card.id} class="card mb-4 shadow p-1 m-3" style={{ width: "18rem" }}>
                    <div class="card-body">
                        <h4 class="card-title mb-5 bg-green">{card.title}</h4>
                        <div className="d-flex flex-wrap">
                            {
                                card.currencies.map(cur => <span class="card-text border p-1 m-1 shadow-sm">{cur}</span>)
                            }
                        </div>

                    </div>
                </div>

                )
            }

            )
            }
        </div>
    )
}

export default CardList;