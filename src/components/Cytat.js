import React, { Component } from "react";



class Cytat extends Component{

    state = {
        cytaty:[
            {id: 0, tresc: "To, że milczę, nie znaczy, że nie mam nic do powiedzenia.", autor: "Jonathan Carroll"},
            {id: 1, tresc: "Dobrze widzi się tylko sercem. Najważniejsze jest niewidoczne dla oczu", autor: "Antoine de Saint-Exupéry, Mały Książę"},
            {id: 2, tresc: "W chwili, kiedy zastanawiasz się czy kogoś kochasz, przestałeś go już kochać na zawsze.", autor: "Carlos Ruiz Zafón, Cień wiatru"},
            {id: 3, tresc: "Pozbierać jest się dziesięć razy trudniej, niż rozsypać.", autor: "Suzanne Collins, Kosogłos"},
            {id: 4, tresc: "Istniejemy póki ktoś o nas pamięta", autor: "Carlos Ruiz Zafón, Cień wiatru"},
            {id: 5, tresc: "Prawdziwa miłość oznacza, że zależy ci na szczęściu drugiego człowieka bardziej niż na własnym, bez względu na to, przed jak bolesnymi wyborami stajesz.", autor: "Nicholas Sparks, I wciąż ją kocham"},
            {id: 6, tresc: "Każdy człowiek jest jak Księżyc. Ma swoją drugą stronę, której nie pokazuje nikomu.", autor: "Mark Twain"},
            {id: 7, tresc: "Jest śmierć i podatki, ale podatki są gorsze, bo śmierć przynajmniej nie trafia się człowiekowi co roku.", autor: "Terry Pratchett, Kosiarz"},
            {id: 8, tresc: "Ludzie są gotowi wierzyć we wszystko, tylko nie w prawdę.", autor: "Carlos Ruiz Zafón, Cień wiatru"},
            {id: 9, tresc: "Tylko dwie rzeczy są nieskończone: wszechświat oraz ludzka głupota, choć nie jestem pewien co do tej pierwszej.", autor: "Albert Einstein"},
        ],
        wylosowaneid: 0,
        wartoscinputatresci: '',
        wartoscinputaautora: '',
        ilosccytatow: 9
    }

    losujid(){
        let zakres = this.state.cytaty.length
        let losowanie_id = Math.floor(Math.random() * zakres);
        this.setState({wylosowaneid: losowanie_id})
    }

    dodajcytat(){
        let pomocnicza = this.state.ilosccytatow + 1
        const cytat = {
            id: pomocnicza,
            tresc: this.state.wartoscinputatresci,
            autor: this.state.wartoscinputaautora
        }
        this.setState({ilosccytatow: pomocnicza})
        const nowatablica = [cytat, ...this.state.cytaty]
        this.setState({cytaty: nowatablica})
    }

    refresh1(event){
        const nowawartosc1 = event.target.value
        this.setState({wartoscinputatresci: nowawartosc1})
    }

    refresh2(event){
        const nowawartosc2 = event.target.value
        this.setState({wartoscinputaautora: nowawartosc2})
    }
    
    componentDidMount(){
        this.losujid()
    }

    render(){
        
        const cytaty = this.state.cytaty.map(e => {
            if(e.id == this.state.wylosowaneid){
                return (
                    <div className="cytat" key={e.id}>
                        <h3>{e.tresc}</h3>
                        <p>{e.autor}</p>
                        <button className="button63" onClick={this.losujid.bind(this)}>Kolejny cytat</button>
                    </div>
                )
            }
        })

        
        
        return(
            
            <div>
                <tekst className="dodawanie" >Dodaj swój cytat</tekst> <br></br> <br></br>
                <input className="input" type = "text" value={this.state.wartoscinputatresci} onChange={this.refresh1.bind(this)}></input> <br></br>
                <input className="input" type = "text" value={this.state.wartoscinputaautora} onChange={this.refresh2.bind(this)}></input> <br></br> <br></br>
                <button className="inputbutton" onClick={this.dodajcytat.bind(this)}>Dodaj</button>
                {cytaty}
            </div>
        )
    }
}

export default Cytat