import "../styles/Dashboard.css";
import TokenBuilder from "../Components/TokenBuilder";
import ButtonBuilder from "../Components/ButtonBuilder";
import ComponentBuilder from "../Components/ComponentBuilder";
import CardBuilder from "../Components/CardBuilder";
import InputBuilder from "../Components/InputBuilder";
import ExportSystem from "../Components/ExportSystem";
import ProjectManager from "../Components/ProjectManager";

export default function Dashboard() {

    return (

        <div className="dashboard">

            <div className="cards">

                <div className="card">
                    <h3>Design Tokens</h3>
                    <p>12 Tokens</p>
                    
                </div>

                <div className="card">
                    <h3>Components</h3>
                    <p>18 Components</p>
                </div>

                <div className="card">
                    <h3>Themes</h3>
                    <p>2 Themes</p>
                </div>

            </div>
            {/* Token Builder Section */}

            <TokenBuilder />

            <ButtonBuilder />

            <ComponentBuilder />

            <CardBuilder />

            <InputBuilder />

            <ExportSystem />

            <ProjectManager />
            <div className="preview">

                <h2>Live Preview</h2>

                <button className="primaryBtn">
                    Get Started
                </button>

            </div>

        </div>

    );

}