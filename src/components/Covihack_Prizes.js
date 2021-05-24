import React, { Fragment } from 'react'
import './assets/css/Covihack_Prizes.css'
import PrizeCard from './PrizeCard';
import celo from "./assets/CoviHack Page assets/Sponsors/Celo.png";
import polygon from "./assets/CoviHack Page assets/Sponsors/polygon.png";
import portis from "./assets/CoviHack Page assets/Sponsors/Portis.png";
import tezos from "./assets/CoviHack Page assets/Sponsors/Tezos.png";
const Covihack_Prizes = (props) => {
    return (
        <Fragment>
            <div id="prizes">
                <div className="prize-area">
                    <div className="container">
                        <h1 className="text-center">Special Prizes</h1>
                        <div className="row">
                            <PrizeCard 
                            bgImage={polygon}
                            heading="Polygon"
                            desc={ <ul className="prizeCard_prizes">
                            <li>
                            ₹10,000 for the best hack built on Ethereum, or
                            </li>
                            <li>
                            ₹15,000 for the best hack built on Ethereum + Polygon,
                            </li>
                            <li>
                            Eligibility to apply for internship/full-time roles and seed funding of up to 5,000 USD for winners!
                            </li>
                            </ul>}
                            />
                           <PrizeCard 
                           bgImage={portis}
                            heading="Portis"
                            desc={
                                <ul className="prizeCard_prizes">
                                    <li>
                                    ₹15,000 for best Dapp built on Portis
                                    </li>
                                </ul>
                            }
                            />
                            <PrizeCard 
                            bgImage={tezos}
                            heading="Tezos"
                            desc={
                                <ul className="prizeCard_prizes">
                                    <li>
                                    ₹20,000 for best Dapp built on Tezos
                                    </li>
                                    <li>
                                    Continuity Grant opportunity for exceptional builders
                                    </li>
                                </ul>
                            }
                            />
                            <PrizeCard 
                            bgImage={celo}
                            heading="celo"
                            desc={
                                <ul className="prizeCard_prizes">
                                      <li>
                                      ₹20,000 for best Dapp built on Celo
                                    </li>
                                    <li>
                                    Continuity Grant opportunity for exceptional builders
                                    </li>
                                </ul>
                            }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Covihack_Prizes
