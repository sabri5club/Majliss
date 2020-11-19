import React, { Component } from "react";
import "./Quizz.css";
import { Quizzdata } from "./services/fakeQuizz";
import QuizzAnswer from "./Quizz_Components/QuizzAnswer";
import QuizzQuestion from "./Quizz_Components/QuizzQuestion";
import QuizzFinish from "./Quizz_Components/QuizzFinish";
import QuizzScore from "./Quizz_Components/QuizzScore";
import { ProgressBar } from "./Quizz_Components/QuizzTimer";
import QuizzNext from "./Quizz_Components/QuizzNext";
import QuizzHeart from "./Quizz_Components/QuizzHeart";
import QuizzReport from "./Quizz_Components/QuizzReport";
import QuizzModal from "./Quizz_Components/QuizzModal";
import { FaTwitterSquare } from "react-icons/fa";

//.filter(
// (item) => item.question_detail.categorie === props.categorie
// )
export default class Quizz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Quizzdata.sort(function (a, b) {
        return 0.5 - Math.random();
      }),
      score: 0,
      index: 0,
      QuizzFinished: false,
      HeartBroke: [],
      percentage: 0,
      heart: [0, 1, 2, 3, 4],
      restart: false,
      message: ["Bonne réponse", "Mauvaise réponse"],
      show: false,
    };
    console.log(`valeur passé par le config ${props.valeur}`);
    this.percentageUpdate = this.percentageUpdate.bind(this);
  }

  percentageUpdate() {
    if (
      this.state.index < this.state.data.length - 1 &&
      this.state.restart === false
    ) {
      this.setState({
        index: this.state.index + 1,
        percentage: this.state.percentage * 0,
        restart: false,
      });
    } else if (this.state.restart) {
      this.setState({
        percentage: this.state.percentage * 0,
        restart: true,
      });
    } else {
      this.setState({
        index: this.state.index * 0,

        QuizzFinished: true,
      });
    }
  }

  componentDidMount() {
    Quizzdata[this.state.index].propositions.sort(() => 0.5 - Math.random());
  }

  componentWillUnmount() {
    console.log("unmount");
  }

  boxClick = (quizz) => {
    console.log(quizz.proposition);
    if (
      this.state.index < this.state.data.length - 1 &&
      this.state.heart.length > 1
    ) {
      if (quizz.goodAnswer === true) {
        this.setState({
          score: this.state.score + 5,
          index: this.state.index + 1,
          percentage: this.state.percentage * 0,
          show: true,
        });
      } else if (quizz.goodAnswer === false) {
        let array = [...this.state.heart];
        let array2 = [...this.state.HeartBroke];
        array2.push("brokeheart");

        array.splice(0, 1);

        this.setState({
          index: this.state.index + 1,
          percentage: this.state.percentage * 0,
          heart: array,
          HeartBroke: array2,
        });
      }
    } else if (
      this.state.index === this.state.data.length - 1 ||
      this.state.heart.length === 1
    ) {
      this.setState({
        QuizzFinished: true,
        score: this.state.score + 5,
      });
    }
    return quizz;
  };

  boxNext = () => {
    if (this.state.index < this.state.data.length - 1) {
      this.setState({
        index: this.state.index + 1,
        percentage: this.state.percentage * 0,
        restart: true,
      });
    } else if (this.state.index === this.state.data.length - 1) {
      this.setState({
        index: this.state.index * 0,
        QuizzFinished: true,
        percentage: this.state.percentage * 0,
        bgColor: "",
      });
    }
  };

  boxRestart = () => {
    if (this.state.QuizzFinished) {
      this.setState({
        index: this.state.index * 0,
        percentage: this.state.percentage * 0,
        QuizzFinished: false,
        score: this.state.score * 0,
        heart: [0, 1, 2, 3, 4],
        HeartBroke: [],
      });
    }
  };

  render() {
    console.log("Ui se re render");
    console.log(this.state.percentage);
    return (
      <>
        {this.state.QuizzFinished ? (
          <>
            <QuizzFinish
              heart={this.state.heart.length}
              length={this.state.data.length}
              restart={this.boxRestart}
              score={this.state.score}
            />
            <div className="d-flex justify-content-center"></div>
          </>
        ) : (
          <>
            <div className="row ">
              <div className=" col-sm-12 col-md-4  d-flex justify-content-center">
                <QuizzHeart
                  heart={this.state.heart}
                  heartbroke={this.state.HeartBroke}
                />
              </div>
              <div className="col-sm-12 col-md-4 d-flex justify-content-center">
                <ProgressBar
                  data={this.state.data.length}
                  index={this.state.index}
                  percentage={this.state.percentage}
                  percentageUpdate={this.percentageUpdate}
                  restart={this.state.restart}
                />
              </div>
              <div className="col-sm-12 col-md-4 d-flex justify-content-center">
                <QuizzScore score={this.state.score} />
              </div>
            </div>

            <div>
              <QuizzQuestion
                index={this.state.index}
                length={this.state.data.length}
                question={
                  this.state.data[this.state.index].question_detail
                    .QuizzQuestion
                }
                categorie={
                  this.state.data[this.state.index].question_detail.categorie
                }
              />

              <div className="container">
                <div className="row">
                  {this.state.data[this.state.index].propositions.map(
                    (quizz) => (
                      <QuizzAnswer
                        key={quizz.id}
                        onClick={() => this.boxClick(quizz)}
                        proposition={quizz.proposition}
                      />
                    )
                  )}
                </div>
                <div className="row">
                  <div className="col-sm-6 col-md-12 d-flex justify-content-center ">
                    <div className="mef-next">
                      <QuizzNext
                        boxNext={this.boxNext}
                        Quizzdata={this.state.data}
                        index={this.state.index}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-12 d-flex justify-content-start">
                  <div className="mef-report">
                    <QuizzReport />
                  </div>
                </div>
                {this.state.show ? <QuizzModal show={this.state.show} /> : null}
                {/* {this.state.show ? <QuizzMessage message={this.state.message[1]} /> : null} */}
              </div>
            </div>
          </>
        )}
      </>
    );
  }
}
