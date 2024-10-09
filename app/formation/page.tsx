"use client";

import { useHighlight } from "@/hooks/useHighlight";
import React from "react";
import "@/styles/training-course.scss";
import Link from "next/link";
import ToTopButton from "@/components/ToTopButton";

export default function TrainingCoursePage() {
  useHighlight();
  return (
    <main className="training-course-page">
      <ToTopButton />
      <div className="print-instruction">
        <span className="btn">CTRL</span> + <span className="btn">P</span> pour
        imprimer ce doc
      </div>
      <div className="back-home">
        <Link href="/">Page d’accueil</Link>
      </div>
      <header className="tcp-cover-page">
        <h1>La formation ultime pour les développeurs de demain.</h1>
        <h2>
          Une formation pratique et concentré, dédié à former les étudiants de
          développer des solutions informatique qui résoudre des problèmes
        </h2>
        <span className="tcp-symbol">&lt;/&gt;</span>

        <span className="tcp-creator">
          Créé par:{" "}
          <span className="code-block language-javascript">"Mehdi JAI"</span>
        </span>
      </header>
      <section className="tcp-toc">
        <h2>Table des matières</h2>
        <ol className="toc-list" role="list">
          <li>
            <a href="#Introduction">
              <span className="title">
                Introduction<span className="leaders" aria-hidden="true"></span>
              </span>{" "}
              <span data-href="#Introduction" className="page">
                <span className="visually-hidden">Page&nbsp;</span>5
              </span>
            </a>
            <ol role="list">
              <li>
                <a href="#Introduction-About-This-Book">
                  <span className="title">
                    About This Book
                    <span className="leaders" aria-hidden="true"></span>
                  </span>{" "}
                  <span
                    data-href="#Introduction-About-This-Book"
                    className="page"
                  >
                    <span className="visually-hidden">Page&nbsp;</span>5
                  </span>
                </a>
              </li>

              <li>
                <a href="#Introduction-Acknowledgments">
                  <span className="title">
                    Acknowledgments
                    <span className="leaders" aria-hidden="true"></span>
                  </span>{" "}
                  <span
                    data-href="#Introduction-Acknowledgments"
                    className="page"
                  >
                    <span className="visually-hidden">Page&nbsp;</span>8
                  </span>
                </a>
              </li>

              <li>
                <a href="#Introduction-About-the-Author">
                  <span className="title">
                    About the Author
                    <span className="leaders" aria-hidden="true"></span>
                  </span>{" "}
                  <span
                    data-href="#Introduction-About-the-Author"
                    className="page"
                  >
                    <span className="visually-hidden">Page&nbsp;</span>8
                  </span>
                </a>
              </li>

              <li>
                <a href="#Introduction-Disclaimer">
                  <span className="title">
                    Disclaimer
                    <span className="leaders" aria-hidden="true"></span>
                  </span>{" "}
                  <span data-href="#Introduction-Disclaimer" className="page">
                    <span className="visually-hidden">Page&nbsp;</span>8
                  </span>
                </a>
              </li>
            </ol>
          </li>
          <li>
            <a href="#Promise-Basics">
              <span className="title">
                1. Promise Basics
                <span className="leaders" aria-hidden="true"></span>
              </span>
              <span data-href="#Promise-Basics" className="page">
                <span className="visually-hidden">Page&nbsp;</span>9
              </span>
            </a>
            <ol role="list">
              <li>
                <a href="#Promise-Basics-The-Promise-Lifecycle">
                  <span className="title">
                    The Promise Lifecycle
                    <span className="leaders" aria-hidden="true"></span>
                  </span>
                  <span
                    data-href="#Promise-Basics-The-Promise-Lifecycle"
                    className="page"
                  >
                    <span className="visually-hidden">Page&nbsp;</span>17
                  </span>
                </a>
              </li>

              <li>
                <a href="#Promise-Basics-Creating-New-Unsettled-Promises">
                  <span className="title">
                    Creating New (Unsettled) Promises
                    <span className="leaders" aria-hidden="true"></span>
                  </span>{" "}
                  <span
                    data-href="#Promise-Basics-Creating-New-Unsettled-Promises"
                    className="page"
                  >
                    <span className="visually-hidden">Page&nbsp;</span>21
                  </span>
                </a>
              </li>

              <li>
                <a href="#Promise-Basics-Creating-Settled-Promises">
                  <span className="title">
                    Creating Settled Promises
                    <span className="leaders" aria-hidden="true"></span>
                  </span>
                  <span
                    data-href="#Promise-Basics-Creating-Settled-Promises"
                    className="page"
                  >
                    <span className="visually-hidden">Page&nbsp;</span>24
                  </span>
                </a>
              </li>

              <li>
                <a href="#Promise-Basics-Summary">
                  <span className="title">
                    Summary<span className="leaders" aria-hidden="true"></span>
                  </span>{" "}
                  <span data-href="#Promise-Basics-Summary" className="page">
                    <span className="visually-hidden">Page&nbsp;</span>27
                  </span>
                </a>
              </li>
            </ol>
          </li>
          <li>
            <a href="#Chaining-Promises">
              <span className="title">
                2. Chaining Promises
                <span className="leaders" aria-hidden="true"></span>
              </span>
              <span data-href="#Chaining-Promises" className="page">
                <span className="visually-hidden">Page&nbsp;</span>28
              </span>
            </a>
            <ol role="list">
              <li>
                <a href="#Chaining-Promises-Catching-Errors">
                  <span className="title">
                    Catching Errors
                    <span className="leaders" aria-hidden="true"></span>
                  </span>{" "}
                  <span
                    data-href="#Chaining-Promises-Catching-Errors"
                    className="page"
                  >
                    <span className="visually-hidden">Page&nbsp;</span>30
                  </span>
                </a>
              </li>

              <li>
                <a href="#Chaining-Promises-Using-finally-in-Promise-Chains">
                  <span className="title">
                    Using finally() in Promise Chains
                    <span className="leaders" aria-hidden="true"></span>
                  </span>{" "}
                  <span
                    data-href="#Chaining-Promises-Using-finally-in-Promise-Chains"
                    className="page"
                  >
                    <span className="visually-hidden">Page&nbsp;</span>34
                  </span>
                </a>
              </li>

              <li>
                <a href="#Chaining-Promises-Returning-Values-in-Promise-Chains">
                  <span className="title">
                    Returning Values in Promise Chains
                    <span className="leaders" aria-hidden="true"></span>
                  </span>{" "}
                  <span
                    data-href="#Chaining-Promises-Returning-Values-in-Promise-Chains"
                    className="page"
                  >
                    <span className="visually-hidden">Page&nbsp;</span>35
                  </span>
                </a>
              </li>

              <li>
                <a href="#Chaining-Promises-Returning-Promises-in-Promise-Chains">
                  <span className="title">
                    Returning Promises in Promise Chains
                    <span className="leaders" aria-hidden="true"></span>
                  </span>{" "}
                  <span
                    data-href="#Chaining-Promises-Returning-Promises-in-Promise-Chains"
                    className="page"
                  >
                    <span className="visually-hidden">Page&nbsp;</span>42
                  </span>
                </a>
              </li>

              <li>
                <a href="#Chaining-Promises-Summary">
                  <span className="title">
                    Summary<span className="leaders" aria-hidden="true"></span>
                  </span>{" "}
                  <span data-href="#Chaining-Promises-Summary" className="page">
                    <span className="visually-hidden">Page&nbsp;</span>43
                  </span>
                </a>
              </li>
            </ol>
          </li>
          <li>
            <a href="#Working-with-Multiple-Promises">
              <span className="title">
                3. Working with Multiple Promises
                <span className="leaders" aria-hidden="true"></span>
              </span>
              <span
                data-href="#Working-with-Multiple-Promises"
                className="page"
              >
                <span className="visually-hidden">Page&nbsp;</span>43
              </span>
            </a>
            <ol role="list">
              <li>
                <a href="#Working-with-Multiple-Promises-The-Promiseall-Method">
                  <span className="title">
                    The Promise.all() Method
                    <span className="leaders" aria-hidden="true"></span>
                  </span>
                  <span
                    data-href="#Working-with-Multiple-Promises-The-Promiseall-Method"
                    className="page"
                  >
                    <span className="visually-hidden">Page&nbsp;</span>51
                  </span>
                </a>
              </li>

              <li>
                <a href="#Working-with-Multiple-Promises-The-PromiseallSettled-Method">
                  <span className="title">
                    The Promise.allSettled() Method
                    <span className="leaders" aria-hidden="true"></span>
                  </span>{" "}
                  <span
                    data-href="#Working-with-Multiple-Promises-The-PromiseallSettled-Method"
                    className="page"
                  >
                    <span className="visually-hidden">Page&nbsp;</span>57
                  </span>
                </a>
              </li>

              <li>
                <a href="#Working-with-Multiple-Promises-The-Promiseany-Method">
                  <span className="title">
                    The Promise.any() Method
                    <span className="leaders" aria-hidden="true"></span>
                  </span>
                  <span
                    data-href="#Working-with-Multiple-Promises-The-Promiseany-Method"
                    className="page"
                  >
                    <span className="visually-hidden">Page&nbsp;</span>61
                  </span>
                </a>
              </li>

              <li>
                <a href="#Working-with-Multiple-Promises-The-Promiserace-Method">
                  <span className="title">
                    The Promise.race() Method
                    <span className="leaders" aria-hidden="true"></span>
                  </span>
                  <span
                    data-href="#Working-with-Multiple-Promises-The-Promiserace-Method"
                    className="page"
                  >
                    <span className="visually-hidden">Page&nbsp;</span>65
                  </span>
                </a>
              </li>

              <li>
                <a href="#Working-with-Multiple-Promises-Summary">
                  <span className="title">
                    Summary<span className="leaders" aria-hidden="true"></span>
                  </span>{" "}
                  <span
                    data-href="#Working-with-Multiple-Promises-Summary"
                    className="page"
                  >
                    <span className="visually-hidden">Page&nbsp;</span>67
                  </span>
                </a>
              </li>
            </ol>
          </li>
          <li>
            <a href="#Async-Functions-and-Await-Expressions">
              <span className="title">
                4. Async Functions and Await Expressions
                <span className="leaders" aria-hidden="true"></span>
              </span>
              <span
                data-href="#Async-Functions-and-Await-Expressions"
                className="page"
              >
                <span className="visually-hidden">Page&nbsp;</span>67
              </span>
            </a>
            <ol role="list">
              <li>
                <a href="#Async-Functions-and-Await-Expressions-Defining-Async-Functions">
                  <span className="title">
                    Defining Async Functions
                    <span className="leaders" aria-hidden="true"></span>
                  </span>
                  <span
                    data-href="#Async-Functions-and-Await-Expressions-Defining-Async-Functions"
                    className="page"
                  >
                    <span className="visually-hidden">Page&nbsp;</span>69
                  </span>
                </a>
              </li>

              <li>
                <a href="#Async-Functions-and-Await-Expressions-What-Makes-Async-Functions-Different">
                  <span className="title">
                    What Makes Async Functions Different
                    <span className="leaders" aria-hidden="true"></span>
                  </span>{" "}
                  <span
                    data-href="#Async-Functions-and-Await-Expressions-What-Makes-Async-Functions-Different"
                    className="page"
                  >
                    <span className="visually-hidden">Page&nbsp;</span>81
                  </span>
                </a>
              </li>

              <li>
                <a href="#Async-Functions-and-Await-Expressions-Summary">
                  <span className="title">
                    Summary<span className="leaders" aria-hidden="true"></span>
                  </span>{" "}
                  <span
                    data-href="#Async-Functions-and-Await-Expressions-Summary"
                    className="page"
                  >
                    <span className="visually-hidden">Page&nbsp;</span>83
                  </span>
                </a>
              </li>
            </ol>
          </li>
          <li>
            <a href="#Unhandled-Rejection-Tracking">
              <span className="title">
                5. Unhandled Rejection Tracking
                <span className="leaders" aria-hidden="true"></span>
              </span>
              <span data-href="#Unhandled-Rejection-Tracking" className="page">
                <span className="visually-hidden">Page&nbsp;</span>83
              </span>
            </a>
            <ol role="list">
              <li>
                <a href="#Unhandled-Rejection-Tracking-Detecting-Unhandled-Rejections">
                  <span className="title">
                    Detecting Unhandled Rejections
                    <span className="leaders" aria-hidden="true"></span>
                  </span>{" "}
                  <span
                    data-href="#Unhandled-Rejection-Tracking-Detecting-Unhandled-Rejections"
                    className="page"
                  >
                    <span className="visually-hidden">Page&nbsp;</span>85
                  </span>
                </a>
              </li>

              <li>
                <a href="#Unhandled-Rejection-Tracking-Web-Browser-Unhandled-Rejection-Tracking">
                  <span className="title">
                    Web Browser Unhandled Rejection Tracking
                    <span className="leaders" aria-hidden="true"></span>
                  </span>{" "}
                  <span
                    data-href="#Unhandled-Rejection-Tracking-Web-Browser-Unhandled-Rejection-Tracking"
                    className="page"
                  >
                    <span className="visually-hidden">Page&nbsp;</span>90
                  </span>
                </a>
              </li>

              <li>
                <a href="#Unhandled-Rejection-Tracking-Nodejs-Unhandled-Rejection-Tracking">
                  <span className="title">
                    Node.js Unhandled Rejection Tracking
                    <span className="leaders" aria-hidden="true"></span>
                  </span>{" "}
                  <span
                    data-href="#Unhandled-Rejection-Tracking-Nodejs-Unhandled-Rejection-Tracking"
                    className="page"
                  >
                    <span className="visually-hidden">Page&nbsp;</span>94
                  </span>
                </a>
              </li>

              <li>
                <a href="#Unhandled-Rejection-Tracking-Summary">
                  <span className="title">
                    Summary<span className="leaders" aria-hidden="true"></span>
                  </span>{" "}
                  <span
                    data-href="#Unhandled-Rejection-Tracking-Summary"
                    className="page"
                  >
                    <span className="visually-hidden">Page&nbsp;</span>95
                  </span>
                </a>
              </li>
            </ol>
          </li>
          <li>
            <a href="#Final-Thoughts">
              <span className="title">
                Final Thoughts
                <span className="leaders" aria-hidden="true"></span>
              </span>
              <span data-href="#Final-Thoughts" className="page">
                <span className="visually-hidden">Page&nbsp;</span>96
              </span>
            </a>
            <ol role="list">
              <li>
                <a href="#Final-Thoughts-Download-the-Extras">
                  <span className="title">
                    Download the Extras
                    <span className="leaders" aria-hidden="true"></span>
                  </span>{" "}
                  <span
                    data-href="#Final-Thoughts-Download-the-Extras"
                    className="page"
                  >
                    <span className="visually-hidden">Page&nbsp;</span>96
                  </span>
                </a>
              </li>

              <li>
                <a href="#Final-Thoughts-Support-the-Author">
                  <span className="title">
                    Support the Author
                    <span className="leaders" aria-hidden="true"></span>
                  </span>{" "}
                  <span
                    data-href="#Final-Thoughts-Support-the-Author"
                    className="page"
                  >
                    <span className="visually-hidden">Page&nbsp;</span>96
                  </span>
                </a>
              </li>

              <li>
                <a href="#Final-Thoughts-Help-and-Support">
                  <span className="title">
                    Help and Support
                    <span className="leaders" aria-hidden="true"></span>
                  </span>{" "}
                  <span
                    data-href="#Final-Thoughts-Help-and-Support"
                    className="page"
                  >
                    <span className="visually-hidden">Page&nbsp;</span>97
                  </span>
                </a>
              </li>

              <li>
                <a href="#Final-Thoughts-Follow-the-Author">
                  <span className="title">
                    Follow the Author
                    <span className="leaders" aria-hidden="true"></span>
                  </span>{" "}
                  <span
                    data-href="#Final-Thoughts-Follow-the-Author"
                    className="page"
                  >
                    <span className="visually-hidden">Page&nbsp;</span>102
                  </span>
                </a>
              </li>
            </ol>
          </li>
        </ol>
      </section>
      <section className="tcp-section">
        <h2>Introduction au Web et outils essentiels</h2>
        <ol>
          <li>
            <h3>Qu'est-ce que le Web ?</h3>
            <p>
              Aperçu de l'internet, des navigateurs web et des serveurs web.
            </p>
          </li>
        </ol>
      </section>
    </main>
  );
}
