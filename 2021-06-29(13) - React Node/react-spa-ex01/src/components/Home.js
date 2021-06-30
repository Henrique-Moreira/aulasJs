import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <main>
                <section className="container column">
                    <div className="left">
                        <h1>Seja bem-vindo</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolorem autem quasi fugit dolor, dolores unde deleniti, deserunt est culpa doloribus cupiditate dolore ea reiciendis? Ullam dolore sequi commodi magni.
                            Nihil ipsum sit incidunt, laborum neque esse tempora soluta corporis laudantium reprehenderit dignissimos voluptatibus nulla, pariatur libero rerum amet deserunt voluptate corrupti deleniti voluptatem dolor qui nemo tempore! Fugiat, voluptas.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolorem autem quasi fugit dolor, dolores unde deleniti, deserunt est culpa doloribus cupiditate dolore ea reiciendis? Ullam dolore sequi commodi magni.
                            Nihil ipsum sit incidunt, laborum neque esse tempora soluta corporis laudantium reprehenderit dignissimos voluptatibus nulla, pariatur libero rerum amet deserunt voluptate corrupti deleniti voluptatem dolor qui nemo tempore! Fugiat, voluptas.</p>
                        
                        <h2>Portfólio</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci vitae magnam consequatur ab, accusantium, architecto natus saepe assumenda cum quam, sequi numquam impedit commodi quisquam consectetur quae quaerat laborum! Repellendus!
                        Pariatur velit cumque possimus ipsa odio delectus expedita similique dolorum, id, fugit alias asperiores quidem magni enim nulla error assumenda earum deserunt dolor ducimus incidunt, eius adipisci excepturi! Minima, accusantium.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci vitae magnam consequatur ab, accusantium, architecto natus saepe assumenda cum quam, sequi numquam impedit commodi quisquam consectetur quae quaerat laborum! Repellendus!
                        Pariatur velit cumque possimus ipsa odio delectus expedita similique dolorum, id, fugit alias asperiores quidem magni enim nulla error assumenda earum deserunt dolor ducimus incidunt, eius adipisci excepturi! Minima, accusantium. [<Link to="/portfolio">Leia mais</Link>]</p>
                        
                        <h2>Sobre</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci vitae magnam consequatur ab, accusantium, architecto natus saepe assumenda cum quam, sequi numquam impedit commodi quisquam consectetur quae quaerat laborum! Repellendus!
                        Pariatur velit cumque possimus ipsa odio delectus expedita similique dolorum, id, fugit alias asperiores quidem magni enim nulla error assumenda earum deserunt dolor ducimus incidunt, eius adipisci excepturi! Minima, accusantium.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci vitae magnam consequatur ab, accusantium, architecto natus saepe assumenda cum quam, sequi numquam impedit commodi quisquam consectetur quae quaerat laborum! Repellendus!
                        Pariatur velit cumque possimus ipsa odio delectus expedita similique dolorum, id, fugit alias asperiores quidem magni enim nulla error assumenda earum deserunt dolor ducimus incidunt, eius adipisci excepturi! Minima, accusantium. [<Link to="/sobre">Leia mais</Link>]</p>

                        <h2>Fale Conosco</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci vitae magnam consequatur ab, accusantium, architecto natus saepe assumenda cum quam, sequi numquam impedit commodi quisquam consectetur quae quaerat laborum! Repellendus!
                        Pariatur velit cumque possimus ipsa odio delectus expedita similique dolorum, id, fugit alias asperiores quidem magni enim nulla error assumenda earum deserunt dolor ducimus incidunt, eius adipisci excepturi! Minima, accusantium.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci vitae magnam consequatur ab, accusantium, architecto natus saepe assumenda cum quam, sequi numquam impedit commodi quisquam consectetur quae quaerat laborum! Repellendus!
                        Pariatur velit cumque possimus ipsa odio delectus expedita similique dolorum, id, fugit alias asperiores quidem magni enim nulla error assumenda earum deserunt dolor ducimus incidunt, eius adipisci excepturi! Minima, accusantium. [<Link to="/faleconosco">Leia mais</Link>]</p>
                    </div>
                </section>
            </main>
        );
    }
}

export default Home;