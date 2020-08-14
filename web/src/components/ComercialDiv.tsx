import React from 'react'

type ComercialDivProps = {
    tiemout: number;
}
type ComercialDivState = {
    hide: string,
    progressBarClass: string
}

let timer: NodeJS.Timeout

export class ComercialDiv extends React.Component<ComercialDivProps, ComercialDivState> {

    state = {
        hide: "",
        progressBarClass: ""
    }

    progressBarTranstition(timeInMili: number){
        const timeInSeg = timeInMili / 1000
        return `width ${timeInSeg}s linear`
    }

    hideHandler() {
        this.setState({ hide: "comercialHiden" })
        setTimeout(() => this.setState({ hide: "comercialHide" }), 500) //Animation time in scss 
        clearTimeout(timer);
    }

    componentDidMount() {
        timer = setTimeout(() => this.hideHandler(), this.props.tiemout) //Time that div dismount
        setTimeout(() => this.setState({progressBarClass: "progressBarTransition"}), 1)
    }

    componentWillUnmount() {
        clearTimeout(timer);
    }

    render() {
        return (
            <div className={`comercialDiv ${this.state.hide}`}>
                <div className="close-comercial" onClick={() => this.hideHandler()}>
                    <span className="close-x-45"></span>
                    <span className="close-x-135"></span>
                </div>
                <div className="comercialContent">
                </div>
                <div className={`comercialTimeOut ${this.state.progressBarClass}`} style={{ transition: this.progressBarTranstition(this.props.tiemout) }}>
                </div>
            </div>
        )
    }

}