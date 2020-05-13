import React,{Component} from "react";

export default class Aside extends Component{
    render() {
        return (
            <aside className="aside">
                <div>
                    <img src="https://cdn.pixabay.com/photo/2013/05/21/14/07/paris-112439_960_720.jpg" alt="" />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima,
                        reiciendis?
                    </p>
                </div>
                <div>
                    <img src="https://cdn.pixabay.com/photo/2015/06/05/15/02/audi-798530_960_720.jpg" alt="" />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima,
                        reiciendis?
                    </p>
                </div>
                <div>
                    <img src="https://cdn.pixabay.com/photo/2012/03/01/01/42/baby-20339_960_720.jpg" alt="" />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima,
                        reiciendis?
                    </p>
                </div>
            </aside>
        );
    }

}