import { useState, useEffect } from "react";
import axios from 'axios'; import "../../../../static/bootstrap/css/bootstrap.min.css";
import "../../../../static/css/colors/blue.css";
import "../../../../static/css/style.css";
import useMessage from "../../../hooks/useMessage";
import { apiUrl } from "../../../../custom/envcutom";

let Index = () => {
    const [skill, setSkill] = useState('');
    const [skillType, setSkillType] = useState('');

    const message = useMessage();

    const handleInput = (e) => {
        e.preventDefault();
        axios.post(`${apiUrl}skill`, {
            name_skill: skill,
            name_skill_type: skillType
        }).then((response) => {
            message.success(response.data.data)
            console.log(response)
        }).catch((error) => {
            message.error(error)
            console.log(error.response.data)
        });
    }

    return (
        <Modal show={props.show} onHide={props.closeModal} size={"lg"} backdrop={"static"}>
            <Modal.Body>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-8">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Skill</h4>
                                    <form className="form">
                                        <div className="form-group m-t-40 row">
                                            <label for="example-text-input" className="col-2 col-form-label">Skill Name</label>
                                            <div className="col-10">
                                                <input className="form-control" type="text" required={true} onChange={e => setSkill(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-search-input" className="col-2 col-form-label">Skill Type Name</label>
                                            <div className="col-10">
                                                <input className="form-control" type="text" required={true} onChange={e => setSkillType(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="form-group text-center m-t-20">
                                            <div className="col-xs-12">
                                                <button className="btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light" type="submit"
                                                    onClick={(e) => handleInput(e) } >Save</button>

                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default Index;