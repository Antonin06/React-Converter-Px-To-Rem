import './App.scss';
import { CopyToClipboard } from "react-copy-to-clipboard";
import AutosizeInput from 'react-input-autosize';
import {useState} from "react";

function App() {
    const [px, setPx] = useState('16');
    const [rem, setRem] = useState('1');
    const [basePx, setBasePx] = useState('16');
    const [isCopied, setIsCopied] = useState(false);


    function handleChangeBase(e) {
        setBasePx(e.target.value);
    }
    function handleChangePx(e) {
        setPx(e.target.value);
    }
    function handleChangeRem(e) {
        setRem(e.target.value);
    }
    function convertPx(px) {
        return (px/basePx).toFixed(2).replace(/[.,]00$/, "");;
    }
    function convertRem(rem) {
        return (rem*basePx).toFixed(2).replace(/[.,]00$/, "");;
    }
    const codeToPx = `
        font-size: ${convertRem(rem)}px;
  `;
    const codeToRem = `
        font-size: ${convertPx(px)}rem;
  `;
    const onCopyText = () => {
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 1000);
    };
    const onCopyText1 = () => {
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 1000);
    };

  return (
    <div className="App">
        <div className="container min-h-100">
            <div className="row wrapper">
                <span className="title">La base est de <AutosizeInput placeholder={basePx} onChange={handleChangeBase}/> px</span>
                <div className="col-6">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" onChange={handleChangePx} placeholder={px} />
                        <span className="input-group-text">px</span>
                    </div>
                    <div className="code-wrapper">
                        <code id="toRem">{codeToRem}</code>
                        <CopyToClipboard text={codeToRem} onCopy={onCopyText}>
                            <button>{isCopied ? "Copied!" : "Copy"}</button>
                        </CopyToClipboard>
                    </div>
                </div>
                <div className="col-6">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control"  onChange={handleChangeRem} placeholder={rem}/>
                            <span className="input-group-text">rem</span>
                    </div>
                    <div className="code-wrapper">
                        <code id="toPx">{codeToPx}</code>
                        <CopyToClipboard text={codeToPx} onCopy={onCopyText1}>
                            <button>{isCopied ? "Copied!" : "Copy"}</button>
                        </CopyToClipboard>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default App;
