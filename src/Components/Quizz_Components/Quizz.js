import React, { Component } from "react";
import "./Quizz.css";
import { Quizzdata } from "../services/fakeQuizz";
import QuizzAnswer from "./QuizzAnswer";
import QuizzQuestion from "./QuizzQuestion";
import QuizzFinish from "./QuizzFinish";
import QuizzScore from "./QuizzScore";
import { ProgressBar } from "./QuizzTimer";
import QuizzNext from "./QuizzNext";
import QuizzHeart from "./QuizzHeart";
import QuizzReport from "./QuizzReport";
import QuizzExplanation from "./QuizzExplanation";
import sucess from "../../sound/success.mp3";
import wrong from "../../sound/wrong.mp3";
import QuizzCommentaires from "./QuizzCommentaires";

export default class Quizz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Quizzdata.sort(function (a, b) {
        return 0.5 - Math.random();
      })
        // .filter(
        //   (question) => question.question_detail.difficulty === props.level
        // )
        .slice(0, props.nombre),

      score: 0,
      index: 0,
      name: props.name,
      QuizzFinished: false,
      NbQuestion: props.nombre,
      NumberSerie: [],
      HeartBroke: [],
      Explanation: false,
      percentage: 0,
      heart: [0, 1, 2, 3, 4],
      couleur: [
        { backgroundColor: "rgb(236, 236, 244)", color: "" },
        { backgroundColor: "rgb(236, 236, 244)", color: "" },
        { backgroundColor: "rgb(236, 236, 244)", color: "" },
        { backgroundColor: "rgb(236, 236, 244)", color: "" },
      ],
      answer: true,
      show: false,
    };

    this.percentageUpdate = this.percentageUpdate.bind(this);
  }

  percentageUpdate() {
    if (this.state.index < this.state.data.length - 1) {
      this.setState({
        index: this.state.index + 1,
        percentage: this.state.percentage * 0,
      });
    } else {
      this.setState({
        index: this.state.index * 0,
        QuizzFinished: true,
      });
    }
  }

  percentageIncrease = () => {
    this.setState({
      percentage: this.state.percentage + 1,
    });
  };

  playSound = (answer) => {
    if (answer) {
      const audio = new Audio(sucess);
      audio.play();
    } else {
      const audio = new Audio(wrong);
      audio.play();
    }
  };

  boxClick = (quizz) => {
    if (
      this.state.index <= this.state.data.length - 1 &&
      this.state.heart.length >= 1
    ) {
      if (quizz.goodAnswer === true && this.state.Explanation === false) {
        this.playSound(quizz.goodAnswer);
        let colors = [...this.state.couleur];

        colors[quizz.id] = {
          backgroundColor: "rgb(2, 191, 99)",
          color: "white",
        };
        this.setState({
          score: this.state.score + 5,
          Explanation: true,
          percentage: this.state.percentage * 0,
          show: true,
          answer: true,
          couleur: colors,
        });
      } else if (
        quizz.goodAnswer === false &&
        this.state.Explanation === false
      ) {
        this.playSound(quizz.goodAnswer);
        let array = [...this.state.heart];
        let array2 = [...this.state.HeartBroke];
        array2.push("brokeheart");

        array.splice(0, 1);
        let colors = [...this.state.couleur];
        colors[quizz.id] = {
          backgroundColor: "rgb(237, 92, 73)",
          color: "white",
        };
        let element = this.state.data[this.state.index].propositions
          .map((reponse) => reponse.goodAnswer)
          .indexOf(true);

        console.log(element);
        colors[element] = {
          backgroundColor: "rgb(2, 191, 99)",
          color: "white",
        };
        this.setState({
          percentage: this.state.percentage * 0,
          heart: array,
          HeartBroke: array2,
          Explanation: true,
          answer: false,
          couleur: colors,
        });
      }
    } else if (this.state.heart.length === 1) {
      this.setState({
        // QuizzFinished: true,
        score: this.state.score + 5,
      });
    }
    return quizz;
  };

  boxNext = () => {
    if (
      this.state.index < this.state.data.length - 1 &&
      this.state.heart.length > 0
    ) {
      let colors = [...this.state.couleur];
      colors = [
        { backgroundColor: "rgb(236, 236, 244)", color: "" },
        { backgroundColor: "rgb(236, 236, 244)", color: "" },
        { backgroundColor: "rgb(236, 236, 244)", color: "" },
        { backgroundColor: "rgb(236, 236, 244)", color: "" },
      ];
      this.setState({
        index: this.state.index + 1,
        percentage: this.state.percentage * 0,
        Explanation: false,
        couleur: colors,
      });
    } else if (
      this.state.index === this.state.data.length - 1 ||
      this.state.heart.length === 0
    ) {
      this.setState({
        index: this.state.index * 0,
        QuizzFinished: true,
        percentage: this.state.percentage * 0,
        bgColor: "",
        Explanation: false,
      });
    }
  };

  boxRestart = () => {
    if (this.state.QuizzFinished) {
      let colors = [...this.state.couleur];
      colors = [
        { backgroundColor: "rgb(236, 236, 244)", color: "" },
        { backgroundColor: "rgb(236, 236, 244)", color: "" },
        { backgroundColor: "rgb(236, 236, 244)", color: "" },
        { backgroundColor: "rgb(236, 236, 244)", color: "" },
      ];
      this.setState({
        index: this.state.index * 0,
        percentage: this.state.percentage * 0,
        QuizzFinished: false,
        score: this.state.score * 0,
        heart: [0, 1, 2, 3, 4],
        HeartBroke: [],
        couleur: colors,
      });
    }
  };

  render() {
    return (
      <>
        {this.state.QuizzFinished ? (
          <>
            <QuizzFinish
              heart={this.state.heart.length}
              length={this.state.data.length}
              restart={this.boxRestart}
              score={this.state.score}
              percentage={this.state.percentage}
              name={this.state.name}
            />
          </>
        ) : (
          <>
            <div className="row ">
              <div className=" col-4  d-flex justify-content-center">
                <QuizzHeart
                  heart={this.state.heart}
                  heartbroke={this.state.HeartBroke}
                />
              </div>
              <div className="col-4 d-flex justify-content-center">
                <ProgressBar
                  data={this.state.data.length}
                  index={this.state.index}
                  percentage={this.state.percentage}
                  percentageUpdate={this.percentageUpdate}
                  percentageIncrease={this.percentageIncrease}
                  Explanation={this.state.Explanation}
                />
              </div>
              <div className="col-4 d-flex justify-content-center">
                <QuizzScore score={this.state.score} />
              </div>
            </div>
            <div className="row d-flex justify-content-around">
              <div className="col-5">
                <div className="row justify-content-end">
                  <div className="row d-flex flex-column justify-content-between">
                    <QuizzQuestion
                      index={this.state.index}
                      length={this.state.data.length}
                      question={
                        this.state.data[this.state.index].question_detail
                          .QuizzQuestion
                      }
                      difficulty={
                        this.state.data[this.state.index].question_detail
                          .difficulty
                      }
                      categorie={
                        this.state.data[this.state.index].question_detail
                          .categorie
                      }
                    />
                    <QuizzNext
                      boxNext={this.boxNext}
                      Quizzdata={this.state.data}
                      index={this.state.index}
                      onKeyDown={(e) => console.log(e)}
                      heart={this.state.heart}
                    />
                    <QuizzReport />
                  </div>
                </div>
              </div>
              <div className="col-6">
                <QuizzAnswer
                  data={this.state.data[this.state.index].propositions}
                  clic={this.boxClick}
                  couleur={this.state.couleur}
                ></QuizzAnswer>
              </div>
            </div>
            {this.state.Explanation ? (
              <>
                <QuizzExplanation
                  explanation={
                    this.state.data[this.state.index].question_detail
                      .explanation
                  }
                />
                <QuizzCommentaires />
              </>
            ) : null}
          </>
        )}
      </>
    );
  }
}
