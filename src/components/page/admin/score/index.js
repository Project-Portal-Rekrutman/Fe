import "../../../../static/bootstrap/css/bootstrap.min.css";
import "../../../../static/css/colors/blue.css";
import "../../../../static/css/style.css";
import Form from "../../../organism/score";

let index = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12">
                    <div className="card">
                        <div className="card-body">
                            <button className="btn btn-danger btn-sm pull-right collapsed" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"> Get code <i className="ti-angle-down"></i></button>
                            <h4 className="card-title">Input Score</h4>
                            <h6 className="card-subtitle"> All bootstrap element classNameies </h6>
                            <div className="collapse" id="collapseExample" aria-expanded="false">
                                <div className="card card-body">
                                    <pre>
                                        <code className="language-html" data-lang="html">
                                            <span className="nt">&lt;div</span> <span className="na">className=</span><span className="s">"form-group row"</span><span className="nt">&gt;</span>
                                            <span className="nt">&lt;label</span> <span className="na">for=</span><span className="s">"example-text-input"</span> <span className="na">className=</span><span className="s">"col-2 col-form-label"</span><span className="nt">&gt;</span>Text<span className="nt">&lt;/label&gt;</span>
                                            <span className="nt">&lt;div</span> <span className="na">className=</span><span className="s">"col-10"</span><span className="nt">&gt;</span>
                                            <span className="nt">&lt;input</span> <span className="na">className=</span><span className="s">"form-control"</span> <span className="na">type=</span><span className="s">"text"</span> <span className="na">value=</span><span className="s">"Artisanal kale"</span> <span className="na">id=</span><span className="s">"example-text-input"</span><span className="nt">&gt;</span>
                                            <span className="nt">&lt;/div&gt;</span>
                                            <span className="nt">&lt;/div&gt;</span>
                                            <span className="nt">&lt;div</span> <span className="na">className=</span><span className="s">"form-group row"</span><span className="nt">&gt;</span>
                                            <span className="nt">&lt;label</span> <span className="na">for=</span><span className="s">"example-search-input"</span> <span className="na">className=</span><span className="s">"col-2 col-form-label"</span><span className="nt">&gt;</span>Search<span className="nt">&lt;/label&gt;</span>
                                            <span className="nt">&lt;div</span> <span className="na">className=</span><span className="s">"col-10"</span><span className="nt">&gt;</span>
                                            <span className="nt">&lt;input</span> <span className="na">className=</span><span className="s">"form-control"</span> <span className="na">type=</span><span className="s">"search"</span> <span className="na">value=</span><span className="s">"How do I shoot web"</span> <span className="na">id=</span><span className="s">"example-search-input"</span><span className="nt">&gt;</span>
                                            <span className="nt">&lt;/div&gt;</span>
                                            <span className="nt">&lt;/div&gt;</span>
                                            <span className="nt">&lt;div</span> <span className="na">className=</span><span className="s">"form-group row"</span><span className="nt">&gt;</span>
                                            <span className="nt">&lt;label</span> <span className="na">for=</span><span className="s">"example-email-input"</span> <span className="na">className=</span><span className="s">"col-2 col-form-label"</span><span className="nt">&gt;</span>Email<span className="nt">&lt;/label&gt;</span>
                                            <span className="nt">&lt;div</span> <span className="na">className=</span><span className="s">"col-10"</span><span className="nt">&gt;</span>
                                            <span className="nt">&lt;input</span> <span className="na">className=</span><span className="s">"form-control"</span> <span className="na">type=</span><span className="s">"email"</span> <span className="na">value=</span><span className="s">"bootstrap@example.com"</span> <span className="na">id=</span><span className="s">"example-email-input"</span><span className="nt">&gt;</span>
                                            <span className="nt">&lt;/div&gt;</span>
                                            <span className="nt">&lt;/div&gt;</span>
                                            <span className="nt">&lt;div</span> <span className="na">className=</span><span className="s">"form-group row"</span><span className="nt">&gt;</span>
                                            <span className="nt">&lt;label</span> <span className="na">for=</span><span className="s">"example-url-input"</span> <span className="na">className=</span><span className="s">"col-2 col-form-label"</span><span className="nt">&gt;</span>URL<span className="nt">&lt;/label&gt;</span>
                                            <span className="nt">&lt;div</span> <span className="na">className=</span><span className="s">"col-10"</span><span className="nt">&gt;</span>
                                            <span className="nt">&lt;input</span> <span className="na">className=</span><span className="s">"form-control"</span> <span className="na">type=</span><span className="s">"url"</span> <span className="na">value=</span><span className="s">"https://getbootstrap.com"</span> <span className="na">id=</span><span className="s">"example-url-input"</span><span className="nt">&gt;</span>
                                            <span className="nt">&lt;/div&gt;</span>
                                            <span className="nt">&lt;/div&gt;</span>
                                            <span className="nt">&lt;div</span> <span className="na">className=</span><span className="s">"form-group row"</span><span className="nt">&gt;</span>
                                            <span className="nt">&lt;label</span> <span className="na">for=</span><span className="s">"example-tel-input"</span> <span className="na">className=</span><span className="s">"col-2 col-form-label"</span><span className="nt">&gt;</span>Telephone<span className="nt">&lt;/label&gt;</span>
                                            <span className="nt">&lt;div</span> <span className="na">className=</span><span className="s">"col-10"</span><span className="nt">&gt;</span>
                                            <span className="nt">&lt;input</span> <span className="na">className=</span><span className="s">"form-control"</span> <span className="na">type=</span><span className="s">"tel"</span> <span className="na">value=</span><span className="s">"1-(555)-555-5555"</span> <span className="na">id=</span><span className="s">"example-tel-input"</span><span className="nt">&gt;</span>
                                            <span className="nt">&lt;/div&gt;</span>
                                            <span className="nt">&lt;/div&gt;</span>
                                            <span className="nt">&lt;div</span> <span className="na">className=</span><span className="s">"form-group row"</span><span className="nt">&gt;</span>
                                            <span className="nt">&lt;label</span> <span className="na">for=</span><span className="s">"example-password-input"</span> <span className="na">className=</span><span className="s">"col-2 col-form-label"</span><span className="nt">&gt;</span>Password<span className="nt">&lt;/label&gt;</span>
                                            <span className="nt">&lt;div</span> <span className="na">className=</span><span className="s">"col-10"</span><span className="nt">&gt;</span>
                                            <span className="nt">&lt;input</span> <span className="na">className=</span><span className="s">"form-control"</span> <span className="na">type=</span><span className="s">"password"</span> <span className="na">value=</span><span className="s">"hunter2"</span> <span className="na">id=</span><span className="s">"example-password-input"</span><span className="nt">&gt;</span>
                                            <span className="nt">&lt;/div&gt;</span>
                                            <span className="nt">&lt;/div&gt;</span>
                                            <span className="nt">&lt;div</span> <span className="na">className=</span><span className="s">"form-group row"</span><span className="nt">&gt;</span>
                                            <span className="nt">&lt;label</span> <span className="na">for=</span><span className="s">"example-number-input"</span> <span className="na">className=</span><span className="s">"col-2 col-form-label"</span><span className="nt">&gt;</span>Number<span className="nt">&lt;/label&gt;</span>
                                            <span className="nt">&lt;div</span> <span className="na">className=</span><span className="s">"col-10"</span><span className="nt">&gt;</span>
                                            <span className="nt">&lt;input</span> <span className="na">className=</span><span className="s">"form-control"</span> <span className="na">type=</span><span className="s">"number"</span> <span className="na">value=</span><span className="s">"42"</span> <span className="na">id=</span><span className="s">"example-number-input"</span><span className="nt">&gt;</span>
                                            <span className="nt">&lt;/div&gt;</span>
                                            <span className="nt">&lt;/div&gt;</span>
                                            <span className="nt">&lt;div</span> <span className="na">className=</span><span className="s">"form-group row"</span><span className="nt">&gt;</span>
                                            <span className="nt">&lt;label</span> <span className="na">for=</span><span className="s">"example-datetime-local-input"</span> <span className="na">className=</span><span className="s">"col-2 col-form-label"</span><span className="nt">&gt;</span>Date and time<span className="nt">&lt;/label&gt;</span>
                                            <span className="nt">&lt;div</span> <span className="na">className=</span><span className="s">"col-10"</span><span className="nt">&gt;</span>
                                            <span className="nt">&lt;input</span> <span className="na">className=</span><span className="s">"form-control"</span> <span className="na">type=</span><span className="s">"datetime-local"</span> <span className="na">value=</span><span className="s">"2011-08-19T13:45:00"</span> <span className="na">id=</span><span className="s">"example-datetime-local-input"</span><span className="nt">&gt;</span>
                                            <span className="nt">&lt;/div&gt;</span>
                                            <span className="nt">&lt;/div&gt;</span>
                                            <span className="nt">&lt;div</span> <span className="na">className=</span><span className="s">"form-group row"</span><span className="nt">&gt;</span>
                                            <span className="nt">&lt;label</span> <span className="na">for=</span><span className="s">"example-date-input"</span> <span className="na">className=</span><span className="s">"col-2 col-form-label"</span><span className="nt">&gt;</span>Date<span className="nt">&lt;/label&gt;</span>
                                            <span className="nt">&lt;div</span> <span className="na">className=</span><span className="s">"col-10"</span><span className="nt">&gt;</span>
                                            <span className="nt">&lt;input</span> <span className="na">className=</span><span className="s">"form-control"</span> <span className="na">type=</span><span className="s">"date"</span> <span className="na">value=</span><span className="s">"2011-08-19"</span> <span className="na">id=</span><span className="s">"example-date-input"</span><span className="nt">&gt;</span>
                                            <span className="nt">&lt;/div&gt;</span>
                                            <span className="nt">&lt;/div&gt;</span>
                                            <span className="nt">&lt;div</span> <span className="na">className=</span><span className="s">"form-group row"</span><span className="nt">&gt;</span>
                                            <span className="nt">&lt;label</span> <span className="na">for=</span><span className="s">"example-month-input"</span> <span className="na">className=</span><span className="s">"col-2 col-form-label"</span><span className="nt">&gt;</span>Month<span className="nt">&lt;/label&gt;</span>
                                            <span className="nt">&lt;div</span> <span className="na">className=</span><span className="s">"col-10"</span><span className="nt">&gt;</span>
                                            <span className="nt">&lt;input</span> <span className="na">className=</span><span className="s">"form-control"</span> <span className="na">type=</span><span className="s">"month"</span> <span className="na">value=</span><span className="s">"2011-08"</span> <span className="na">id=</span><span className="s">"example-month-input"</span><span className="nt">&gt;</span>
                                            <span className="nt">&lt;/div&gt;</span>
                                            <span className="nt">&lt;/div&gt;</span>
                                            <span className="nt">&lt;div</span> <span className="na">className=</span><span className="s">"form-group row"</span><span className="nt">&gt;</span>
                                            <span className="nt">&lt;label</span> <span className="na">for=</span><span className="s">"example-week-input"</span> <span className="na">className=</span><span className="s">"col-2 col-form-label"</span><span className="nt">&gt;</span>Week<span className="nt">&lt;/label&gt;</span>
                                            <span className="nt">&lt;div</span> <span className="na">className=</span><span className="s">"col-10"</span><span className="nt">&gt;</span>
                                            <span className="nt">&lt;input</span> <span className="na">className=</span><span className="s">"form-control"</span> <span className="na">type=</span><span className="s">"week"</span> <span className="na">value=</span><span className="s">"2011-W33"</span> <span className="na">id=</span><span className="s">"example-week-input"</span><span className="nt">&gt;</span>
                                            <span className="nt">&lt;/div&gt;</span>
                                            <span className="nt">&lt;/div&gt;</span>
                                            <span className="nt">&lt;div</span> <span className="na">className=</span><span className="s">"form-group row"</span><span className="nt">&gt;</span>
                                            <span className="nt">&lt;label</span> <span className="na">for=</span><span className="s">"example-time-input"</span> <span className="na">className=</span><span className="s">"col-2 col-form-label"</span><span className="nt">&gt;</span>Time<span className="nt">&lt;/label&gt;</span>
                                            <span className="nt">&lt;div</span> <span className="na">className=</span><span className="s">"col-10"</span><span className="nt">&gt;</span>
                                            <span className="nt">&lt;input</span> <span className="na">className=</span><span className="s">"form-control"</span> <span className="na">type=</span><span className="s">"time"</span> <span className="na">value=</span><span className="s">"13:45:00"</span> <span className="na">id=</span><span className="s">"example-time-input"</span><span className="nt">&gt;</span>
                                            <span className="nt">&lt;/div&gt;</span>
                                            <span className="nt">&lt;/div&gt;</span>
                                            <span className="nt">&lt;div</span> <span className="na">className=</span><span className="s">"form-group row"</span><span className="nt">&gt;</span>
                                            <span className="nt">&lt;label</span> <span className="na">for=</span><span className="s">"example-color-input"</span> <span className="na">className=</span><span className="s">"col-2 col-form-label"</span><span className="nt">&gt;</span>Color<span className="nt">&lt;/label&gt;</span>
                                            <span className="nt">&lt;div</span> <span className="na">className=</span><span className="s">"col-10"</span><span className="nt">&gt;</span>
                                            <span className="nt">&lt;input</span> <span className="na">className=</span><span className="s">"form-control"</span> <span className="na">type=</span><span className="s">"color"</span> <span className="na">value=</span><span className="s">"#563d7c"</span> <span className="na">id=</span><span className="s">"example-color-input"</span><span className="nt">&gt;</span>
                                            <span className="nt">&lt;/div&gt;</span>
                                            <span className="nt">&lt;/div&gt;</span></code>
                                    </pre>
                                </div>
                            </div>
                            <Form/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index;