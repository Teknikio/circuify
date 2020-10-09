import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import Figure from "react-bootstrap/Figure";

import _ from "lodash";

import { Icon } from "@iconify/react";
import arrowsExpand from "@iconify/icons-bi/arrows-expand";
import arrowsCollapse from "@iconify/icons-bi/arrows-collapse";
import { tabsComponent, tabs } from "./Tabs.jsx";
import ButtonInternal from "./component/ButtonInternal.js";

export let selectedOption = { option: "SELECT", type: "TOOL" };

SidebarOption.defaultProps = {
    imageWidth: 50,
};

function SidebarOption(props) {
    return (
        <Button
            className={
                props.name === sessionStorage.getItem("selectedOption")
                    ? "btnOutline border-0"
                    : "btnNoOutline border-0"
            }
            variant="secondary"
            // style={{ backgroundColor: "transparent" }}
            onClick={props.onClick}
        >
            <Figure>
                <Figure.Image
                    src={props.image}
                    width={props.imageWidth}
                    alt={props.name}
                />
                <Figure.Caption
                    className="text-left"
                    style={{ color: "black" }}
                >
                    <span
                        className="text-center d-inline-block"
                        style={{ width: 100, wordWrap: "break-word" }}
                    >
                        {props.name}
                    </span>
                </Figure.Caption>
            </Figure>
        </Button>
    );
}

function SidebarOptions(props) {
    return props.menuChunks.map((chunk, index) => (
        <div key={index} className="d-flex justify-content-around">
            {chunk.map((item, index) => (
                <SidebarOption
                    key={index}
                    name={item.name}
                    image={item.image}
                    imageWidth={props.imageWidth}
                    onClick={() => {
                        props.onClick(item.name);
                    }}
                />
            ))}
        </div>
    ));
}

function CollapsableMenu(props) {
    const [open, setOpen] = useState(props.isOpen);

    const menuChunks = _.chunk(props.menuItems, Math.ceil(2));

    return (
        <>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="collapse-content"
                aria-expanded={open}
                variant={open ? "info" : "secondary"}
                className="mb-2 rounded-lg" // shadow
            >
                <div className="my-2 d-flex justify-content-between">
                    <p className="p-0 m-0 text-xl">{props.menuName}</p>
                    <Icon
                        icon={open ? arrowsCollapse : arrowsExpand}
                        width="20"
                    />
                </div>
            </Button>
            <Collapse in={open}>
                <div id="collapse-content" className="px-2 mt-2 mb-2">
                    <SidebarOptions
                        menuChunks={menuChunks}
                        imageWidth={props.imageWidth}
                        onClick={(name) => {
                            props.onClick(name);
                        }}
                    />
                </div>
            </Collapse>
        </>
    );
}

export default class Sidebar extends React.Component {
    constructor(props) {
        super();
        this.state = { refresh: false };
    }

    setSelection = (optionName, optionType) => {
        selectedOption = { option: optionName, type: optionType };
        sessionStorage.setItem("selectedOption", optionName);
        sessionStorage.setItem("selectedType", optionType);
        this.setState({
            refresh: !this.state.refresh,
        });
    };

    componentDidMount() {
        this.interval = setInterval(() => {
            if (
                selectedOption.option !==
                sessionStorage.getItem("selectedOption")
            ) {
                selectedOption = {
                    option: sessionStorage.getItem("selectedOption"),
                    type: sessionStorage.getItem("selectedType"),
                };
                this.setState({ refresh: !this.state.refresh });
            }
        }, 100);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const bluebird = [
					{ image: "http://localhost:3000/circuify/Images/icons_menu/accelerometerIcon.png", name: "Accelerometer",},
					{ image: "http://localhost:3000/circuify/Images/icons_menu/gpioIcon.png", name: "Pins",},
					{ image: "http://localhost:3000/circuify/Images/icons_menu/LEDIcon.png", name: "LED",},
					{ image: "http://localhost:3000/circuify/Images/icons_menu/temperatureBluebird.png", name: "Temperature",},
					{ image: "http://localhost:3000/circuify/Images/icons_menu/LightSensorIcon.png", name: "LightSensor",},
					{ image: "http://localhost:3000/circuify/Images/icons_menu/AudioBluebirdIcon.png", name: "AudioBoard",},
        ];

        const logics = [
					{ image: "http://localhost:3000/circuify/Images/icons_menu/CompareIcon.png", name: "Compare",},
					{ image: "http://localhost:3000/circuify/Images/icons_menu/NOTIcon.png", name: "Not",},
					{ image: "http://localhost:3000/circuify/Images/icons_menu/ANDIcon.png", name: "And",},
					{ image: "http://localhost:3000/circuify/Images/icons_menu/NANDIcon.png", name: "Nand",},
					{ image: "http://localhost:3000/circuify/Images/icons_menu/ORIcon.png", name: "Or",},
					{ image: "http://localhost:3000/circuify/Images/icons_menu/NORIcon.png", name: "Nor",},
					{ image: "http://localhost:3000/circuify/Images/icons_menu/XORIcon.png", name: "Xor",},
        ];

        const effects = [
					{ image: "http://localhost:3000/circuify/Images/icons_menu/BlinkIcon.png", name: "Blink",},
					{ image: "http://localhost:3000/circuify/Images/icons_menu/FadeIcon.png", name: "Fade",},
					{ image: "http://localhost:3000/circuify/Images/icons_menu/TimerIcon.png", name: "Timer",},
					{ image: "http://localhost:3000/circuify/Images/icons_menu/CounterIcon.png", name: "Counter",},
        ];

        const math = [
					{ image: "http://localhost:3000/circuify/Images/icons_menu/NumberIcon.png", name: "Number",},
					{ image: "http://localhost:3000/circuify/Images/icons_menu/PlusIcon.png", name: "Add",},
					{ image: "http://localhost:3000/circuify/Images/icons_menu/MinusIcon.png", name: "Subtract",},
					{ image: "http://localhost:3000/circuify/Images/icons_menu/MultiplyIcon.png", name: "Multiply",},
					{ image: "http://localhost:3000/circuify/Images/icons_menu/DivideIcon.png", name: "Divide",},
					{ image: "http://localhost:3000/circuify/Images/icons_menu/MapIcon.png", name: "Map",},
        ];

        const inspect = [
					{
							image: "http://localhost:3000/circuify/Images/icons_menu/ScopeIcon.png",
							name: "Scope",
					},
						{
								image: "http://localhost:3000/circuify/Images/Demultiplexer.png",
								name: "DEMUX",
						},
        ];        

        // const tools = [
        //     {
        //         image: "./Images/Cursor.png",
        //         name: "SELECT",
        //     },
        //     {
        //         image: "./Images/DeleteWire.png",
        //         name: "REMOVE WIRE",
        //     },
        // ];

        // const inputs = [
        //     {
        //         image: "./Images/True.png",
        //         name: "TRUE",
        //     },
        //     {
        //         image: "./Images/False.png",
        //         name: "FALSE",
        //     },
        //     {
        //         image: "./Images/Clock.png",
        //         name: "CLOCK",
        //     },
        //     {
        //         image: "./Images/Button.png",
        //         name: "BUTTON",
        //     },
        //     {
        //         image: "./Images/Switch.png",
        //         name: "SWITCH",
        //     },
        // ];

        // const gates = [
        //     {
        //         image:
        //             "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Buffer_ANSI.svg/150px-Buffer_ANSI.svg.png",
        //         name: "BUFFER",
        //     },
        //     {
        //         image:
        //             "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/NOT_ANSI.svg/150px-NOT_ANSI.svg.png",
        //         name: "NOT",
        //     },
        //     {
        //         image:
        //             "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/AND_ANSI.svg/150px-AND_ANSI.svg.png",
        //         name: "AND",
        //     },
        //     {
        //         image:
        //             "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/NAND_ANSI.svg/150px-NAND_ANSI.svg.png",
        //         name: "NAND",
        //     },
        //     {
        //         image:
        //             "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/OR_ANSI.svg/150px-OR_ANSI.svg.png",
        //         name: "OR",
        //     },
        //     {
        //         image:
        //             "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/NOR_ANSI.svg/150px-NOR_ANSI.svg.png",
        //         name: "NOR",
        //     },
        //     {
        //         image:
        //             "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/XOR_ANSI.svg/150px-XOR_ANSI.svg.png",
        //         name: "XOR",
        //     },
        //     {
        //         image:
        //             "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/XNOR_ANSI.svg/150px-XNOR_ANSI.svg.png",
        //         name: "XNOR",
        //     },
        // ];

        // const outputs = [
        //     {
        //         image: "./Images/Lightbulb.png",
        //         name: "LIGHT BULB",
        //     },
        //     {
        //         image: "./Images/Hexdigit02.png",
        //         name: "HEX DIGIT",
        //     },
        //     {
        //         image: "./Images/SevenSegment.png",
        //         name: "SEVEN SEGMENT",
        //     },
        //     {
        //         image: "./Images/Oscilloscope.png",
        //         name: "O-SCOPE",
        //     },
        // ];

        // const flipflops = [
        //     {
        //         image: "./Images/SRFlip-Flop.png",
        //         name: "SR FLIP-FLOP",
        //     },
        //     {
        //         image: "./Images/DFlip-Flop.png",
        //         name: "D FLIP-FLOP",
        //     },
        //     {
        //         image: "./Images/JKFlip-Flop.png",
        //         name: "JK FLIP-FLOP",
        //     },
        //     {
        //         image: "./Images/TFlip-Flop.png",
        //         name: "T FLIP-FLOP",
        //     },
        // ];

        // const plexers = [
        //     {
        //         image: "./Images/Multiplexer.png",
        //         name: "MUX",
        //     },
        //     {
        //         image: "./Images/Demultiplexer.png",
        //         name: "DEMUX",
        //     },
        // ];

        const circuits = [];
        let currentCircuit = sessionStorage.getItem("currentCircuit");
        for (let i = 1; i < tabs.length; i++) {
            if (tabs[i] !== currentCircuit) {
                circuits.push({
                    image: "http://localhost:3000/circuify/Images/IntegratedCircuit.png",
                    name: tabs[i],
                });
            }
        }

        let circuitMenu;
        if (circuits.length > 0) {
            circuitMenu = (
                <CollapsableMenu
                    isOpen={false}
                    menuName="Integrated Circuits"
                    menuItems={circuits}
                    onClick={(name) => {
                        this.setSelection(name, "CIRCUIT");
                    }}
                    imageWidth={70}
                />
            );
        } else {
            circuitMenu = <></>;
        }

        return (
            <>
                <Col
                    md={3}
                    lg={2}
                    className="d-md-block bg-light sidebar collapse"
                >
                    <div className="pt-0 sidebar-sticky">
											{/* <ButtonInternal link='' transkey='see All inventions' label='see All inventions' /> */}
                        <ul className="nav flex-column">
                            <CollapsableMenu
                                isOpen={false}
                                menuName="Bluebird"
                                type="BLUEBIRD"
                                menuItems={bluebird}
                                onClick={(name) =>
                                    this.setSelection(name, "BLUEBIRD")
                                }
                                imageWidth={45}
                            />
														<CollapsableMenu
                                isOpen={false}
                                menuName="Logic"
                                type="LOGIC"
                                menuItems={logics}
                                onClick={(name) =>
                                    this.setSelection(name, "LOGIC")
                                }
                                imageWidth={45}
                            />
                            <CollapsableMenu
                                isOpen={false}
                                menuName="Effects"
                                type="EFFECTS"
                                menuItems={effects}
                                onClick={(name) =>
                                    this.setSelection(name, "EFFECTS")
                                }
                                imageWidth={45}
                            />
                            <CollapsableMenu
                                isOpen={false}
                                menuName="Math"
                                type="MATH"
                                menuItems={math}
                                onClick={(name) =>
                                    this.setSelection(name, "MATH")
                                }
                                imageWidth={45}
                            />																											
                            {/* <CollapsableMenu
                                isOpen={false}
                                menuName="Tools"
                                type="TOOL"
                                menuItems={tools}
                                onClick={(name) =>
                                    this.setSelection(name, "TOOL")
                                }
                                imageWidth={45}
                            />
                            <CollapsableMenu
                                isOpen={false}
                                menuName="Inputs"
                                menuItems={inputs}
                                onClick={(name) =>
                                    this.setSelection(name, "INPUT")
                                }
                                imageWidth={55}
                            />
                            <CollapsableMenu
                                isOpen={false}
                                menuName="Logic Gates"
                                menuItems={gates}
                                onClick={(name) =>
                                    this.setSelection(name, "GATE")
                                }
                                imageWidth={55}
                            />
                            <CollapsableMenu
                                isOpen={false}
                                menuName="Outputs"
                                menuItems={outputs}
                                onClick={(name) =>
                                    this.setSelection(name, "OUTPUT")
                                }
                                imageWidth={55}
                            />
                            
                            <CollapsableMenu
                                isOpen={false}
                                menuName="Flip-Flops"
                                menuItems={flipflops}
                                onClick={(name) => {
                                    this.setSelection(name, "FLIP-FLOP");
                                }}
                                imageWidth={70}
                            />

                            <CollapsableMenu
                                isOpen={false}
                                menuName="Plexers"
                                menuItems={plexers}
                                onClick={(name) => {
                                    this.setSelection(name, "PLEXER");
                                }}
                                imageWidth={70}
                            /> */}
                            {circuitMenu}
                        </ul>
                    </div>
                </Col>
            </>
        );
    }
}
