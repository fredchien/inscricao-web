import Image from "next/image";
import styles from "./footer.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faSquareInstagram,
  faSquareTumblr,
  faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";
import Pactual from "../../assets/logo-pacto-global-onu.png";

import Implementation from "../../assets/logo-pemdi.png";
import Arrecadacao from "../../assets/logo-erradicao.png";
import Educacao from "../../assets/logo-educacao.png";
import IgualdadeGenero from "../../assets/logo-igualdade.png";
import Idustria from "../../assets/logo-iii.png";
import Reducao from "../../assets/logo-reducao.png";
import TrabalhoEco from "../../assets/logo-tdce.png";
import CircleColor from "../../assets/logo-ods.png";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <figure className={styles.triangule_right_bottom}></figure>
      <figure className={styles.triangule_left_bottom}></figure>
      <div className={styles.content}>
        <figure>
          <img
            className={styles.iconVnW}
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTkyLjIyMiIgaGVpZ2h0PSIxMzQuMTczIiB2aWV3Qm94PSIwIDAgMTkyLjIyMiAxMzQuMTczIj48ZGVmcz48c3R5bGU+LmF7ZmlsbDpub25lO30uYntpc29sYXRpb246aXNvbGF0ZTt9LmN7Y2xpcC1wYXRoOnVybCgjYSk7fS5ke2ZpbGw6IzBmMmI5Mjt9LmV7ZmlsbDojZmZhYzJkO30uZntmaWxsOiNmZjYxMWU7fTwvc3R5bGU+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBjbGFzcz0iYSIgZD0iTTAtNS4xNDlIMTkyLjIyMlYtMTM5LjMyMkgwWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAxMzkuMzIyKSIvPjwvY2xpcFBhdGg+PC9kZWZzPjxnIGNsYXNzPSJiIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDEzOS4zMjIpIj48ZyBjbGFzcz0iYyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMTM5LjMyMikiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcxLjY4NCAzMy41MzkpIj48cGF0aCBjbGFzcz0iZCIgZD0iTS0uMzY5LS43NGE5LjYxMyw5LjYxMywwLDAsMCw5LjY4MS05LjYxNkE5LjY2OCw5LjY2OCwwLDAsMC0uMzY5LTIwLjAzN2E5LjYxMyw5LjYxMywwLDAsMC05LjYxNiw5LjY4MUE5LjU1OCw5LjU1OCwwLDAsMC0uMzY5LS43NCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOS45ODUgMjAuMDM3KSIvPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5OS44NzUgOTAuNDM3KSI+PHBhdGggY2xhc3M9ImQiIGQ9Ik0tLjM0MiwwQTkuNyw5LjcsMCwwLDAtOS4yNDgsNS45MzdIOC41QTkuNzc3LDkuNzc3LDAsMCwwLS4zNDIsMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOS4yNDgpIi8+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE1MC4zNDUgOTAuNTAxKSI+PHBhdGggY2xhc3M9ImQiIGQ9Ik0tLjM3MS0uNzRhOS42MTMsOS42MTMsMCwwLDAsOS42ODEtOS42MTZBOS42NjgsOS42NjgsMCwwLDAtLjM3MS0yMC4wMzdhOS42NjgsOS42NjgsMCwwLDAtOS42ODEsOS42ODFBOS42MTMsOS42MTMsMCwwLDAtLjM3MS0uNzQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwLjA1MiAyMC4wMzcpIi8+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2OC4xMzcgMzguMDczKSI+PHBhdGggY2xhc3M9ImQiIGQ9Ik0tLjE5NCwwQTUuMDY0LDUuMDY0LDAsMCwwLTUuMjYsNS4xLDUuMDM1LDUuMDM1LDAsMCwwLS4xOTQsMTAuMTY1LDUuMDYzLDUuMDYzLDAsMCwwLDQuOSw1LjEsNS4wOTIsNS4wOTIsMCwwLDAtLjE5NCwwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1LjI2KSIvPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIj48cGF0aCBjbGFzcz0iZCIgZD0iTS00Ljk5Mi0uOTM1YTguMjM5LDguMjM5LDAsMCwwLS41NC0yLjk0MiwxNC42MSwxNC42MSwwLDAsMCwxLjYzNy02LjczOCwxNC43MTIsMTQuNzEyLDAsMCwwLTE0LjctMTQuN0ExNC43MTEsMTQuNzExLDAsMCwwLTMyLjcyOS0xNC41NjljLS4xOTItLjAxMy0uMzgyLS4wMjktLjU3OC0uMDI5SC00NC4wODRhOC4yMzgsOC4yMzgsMCwwLDAtNy4wMjMsMy45MjdxLTEuMzEzLS4xMi0yLjY1Ny0uMTE5YTI4LjQyMSwyOC40MjEsMCwwLDAtMTYuMiw1LjA1MSw4LjIwOSw4LjIwOSwwLDAsMC0xLjI4NC0uOThsLTkuMjkzLTUuNzQ0QTguMiw4LjIsMCwwLDAtODQuODY2LTEzLjdhOC4yMzgsOC4yMzgsMCwwLDAtNy4wMTgsMy45MDdMLTEwMS4yLDUuMjc2bC05LjMxOS0xNS4wNjVhOC4yMzUsOC4yMzUsMCwwLDAtNy4wMTctMy45MDcsOC4yLDguMiwwLDAsMC00LjMyNSwxLjIzM2wtOS4yOTMsNS43NDRBOC4yNDMsOC4yNDMsMCwwLDAtMTM0Ljg0NC0xLjZhOC4yNDIsOC4yNDIsMCwwLDAsMS4wMTIsNi4yMjdsMjUuNDUzLDQxLjE2MS03LjIzMiwzLjIzMUE4LjI0MSw4LjI0MSwwLDAsMC0xMTkuOCw1OS44NTVsMTguMzI5LDQxLjc1NWE4LjI0Miw4LjI0MiwwLDAsMCw3LjU0Niw0LjkzaDBhOC4yNDEsOC4yNDEsMCwwLDAsNy41NDUtNC45MzdMLTgwLjUsODguMTg5bDUuODc0LDEzLjQxNGE4LjI0Myw4LjI0MywwLDAsMCw3LjU0Niw0LjkzNmgwYTguMjQyLDguMjQyLDAsMCwwLDcuNTQ2LTQuOTNsNS43NjQtMTMuMTI5YTI4LjY4MiwyOC42ODIsMCwwLDAsMjcuNDE3LDIwLjM4MmgxLjYxM2E4LjI0MSw4LjI0MSwwLDAsMCw4LjI0Mi04LjI0MlY5MC4wODNoNS4zQTguMiw4LjIsMCwwLDAtOC44MzUsOTUuMTNsNy40ODYsNy41NWE4LjI0NCw4LjI0NCwwLDAsMCw1LjgzNSwyLjQzOEg0LjVhOC4yNDIsOC4yNDIsMCwwLDAsNS44MjgtMi40MTNsMi4wODMtMi4wODRhMjguNjc2LDI4LjY3NiwwLDEsMCwxMi41NDctNTQuNDVxLS43MjQsMC0xLjQzOS4wMzVWNDIuNTM4YzAtLjA0NC0uMDA2LS4wODgtLjAwNy0uMTMxYTguMjA4LDguMjA4LDAsMCwwLDcuNzUxLTYuODUxLDE4Ljg3OSwxOC44NzksMCwwLDAsNi42MiwxLjI4OSw4LjIwOCw4LjIwOCwwLDAsMCw1LjM1MiwxLjk3NGg1LjY3N2E4LjI0Miw4LjI0MiwwLDAsMCw4LjI0Mi04LjI0MlY1LjA3OWE4LjI0MSw4LjI0MSwwLDAsMC04LjI0Mi04LjI0Mkg0My4yMzhhOC4yMTEsOC4yMTEsMCwwLDAtNS4zOTIsMi4wMDhBMTguODM2LDE4LjgzNiwwLDAsMCwyOC4zNywxLjU2NCw4LjIsOC4yLDAsMCwwLDIzLjE0My0uMzA4SDE3LjQ2NkE4LjIsOC4yLDAsMCwwLDEzLjM4My43NzNMOS42MzMtMy43NTFBOC4yNDEsOC4yNDEsMCwwLDAtNC45NTMsMS41MDlaTTMuMjg4LDEuNTA5bDE0LjE3OCwxNy4xVjcuOTM0aDQuNDg5YTE4Ljk1NCwxOC45NTQsMCwwLDAsMS4xODgsMjEuNTV2NC43TDguOTY2LDE3LjA3OVYyNy43NTZIMy4yODhabS0xNi41MjEsMzUuMThILTI0LjAxMVYtLjkzNWgxMC43NzdaTS0xOC41OS0xNy4wNjlhNi40Myw2LjQzLDAsMCwxLDYuNDUzLDYuNDUzQTYuNDczLDYuNDczLDAsMCwxLTE4LjU5LTQuMTYyYTYuNDMyLDYuNDMyLDAsMCwxLTYuNDUzLTYuNDU0LDYuMzkxLDYuMzkxLDAsMCwxLDYuNDUzLTYuNDUzTS00NC4wODQtLjAzMlYtNi4zNTZoMTAuNzc3djQ4LjRILTQ0LjA4NFYzNS43ODVBMTkuMzA5LDE5LjMwOSwwLDAsMS01My43NjUsMzguMywyMC4zNTQsMjAuMzU0LDAsMCwxLTc0LjE1OCwxNy45MDlhMjAuNTY1LDIwLjU2NSwwLDAsMSwuNzMxLTUuNDMxbDQuODU2LTcuODU0QTguMTkzLDguMTkzLDAsMCwwLTY3LjgzNywzLjEsMjAuMjc3LDIwLjI3NywwLDAsMS01My43NjUtMi41NDksMTkuMzA4LDE5LjMwOCwwLDAsMS00NC4wODQtLjAzMk0tMTE3LjUzLTUuNDUzbDE2LjMyOCwyNi40LDE2LjMyNi0yNi40LDguNzgsNS40MjdBMjguNjczLDI4LjY3MywwLDAsMC04MSw5LjA0OGwtMjAuMiwzMi42NzRMLTEyNi44MjMuMjkxWk0tNjcuMDc1LDk4LjMtODAuNSw2Ny42NDMtOTMuOTIyLDk4LjMtMTEyLjI1LDU2LjU0M2w5LjY4MS00LjMyNCw4LjY0OCwxOS43NDhMLTgwLjUsNDEuMzEybDEzLjQyMywzMC42NTUsOC42NDgtMTkuNzQ4LDkuNjgxLDQuMzI0LS40NTMsMS4wM2EyOC41LDI4LjUsMCwwLDAtNS4zMTYsMTIuMTA5Wm0zMS4yNC0xNi40NTZhOS43NDEsOS43NDEsMCwwLDAsOS40ODcsOC4wNjZoMS42MTNWMTAwLjYyaC0xLjYxM0EyMC4zNTQsMjAuMzU0LDAsMCwxLTQ2Ljc0MSw4MC4yMjdWNzQuODA2YTIwLjY3OCwyMC42NzgsMCwwLDEsLjE5LTIuNzU5bDQuNTIxLTEwLjNhMjAuMzM2LDIwLjMzNiwwLDAsMSwxNS42ODMtNy4zMzVBMjAuNDA5LDIwLjQwOSwwLDAsMS01Ljg5LDc0LjgwNnY1Ljc3MmwtMS4yNjIsMS4yNjNabTYwLjgtMjcuNDI4QTIwLjQyNiwyMC40MjYsMCwxLDEsMTEuMzQ1LDkwLjAzN0w0LjUsOTYuODc3bC03LjMyOC03LjM5QTguMjU2LDguMjU2LDAsMCwwLDEuOTQsODQuNEw0LjUsODEuODQxdi0zOS4zSDE1LjI4MVY1Ni45M2ExOS4zMTEsMTkuMzExLDAsMCwxLDkuNjgxLTIuNTE3TTQ4LjkxNSwzMC41NzdINDMuMjM4di0zLjNhMTAuMTY0LDEwLjE2NCwwLDAsMS01LjEsMS4zMjYsMTAuNywxMC43LDAsMCwxLTYuNzUzLTIuMzgzVjkuNDgxYTEwLjY3MSwxMC42NzEsMCwwLDEsNi43NTMtMi40LDEwLjE3NCwxMC4xNzQsMCwwLDEsNS4xLDEuMzI2VjUuMDc5aDUuNjc3WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTM1LjA2NCAyNS4zMTEpIi8+PC9nPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4LjI0MiAtMTE5LjQ2NCkiPjxwYXRoIGNsYXNzPSJlIiBkPSJNLS45ODMtMS4wMTNsMTYuMzI3LTI2LjQsOS4yOTMsNS43NDRMLS45ODMsMTkuNzY4LTI2LjYtMjEuNjY0bDkuMjkzLTUuNzQ0WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjYuNjA0IDI3LjQwOCkiLz48L2c+PGcgY2xhc3M9ImMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTEzOS4zMjIpIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2MC45MDYgMTguOTU0KSI+PHBhdGggY2xhc3M9ImUiIGQ9Ik0tMS41NjgsMFY0OC40SC0xMi4zNDV2LTYuMjZhMTkuMzA4LDE5LjMwOCwwLDAsMS05LjY4MSwyLjUxNkEyMC4zNTMsMjAuMzUzLDAsMCwxLTQyLjQxOSwyNC4yNjYsMjAuNDA5LDIwLjQwOSwwLDAsMS0yMi4wMjYsMy44MDhhMTkuMzA4LDE5LjMwOCwwLDAsMSw5LjY4MSwyLjUxNlYwWk0tMzEuNjQyLDI0LjI2NmE5LjU1Nyw5LjU1NywwLDAsMCw5LjYxNiw5LjYxNSw5LjYxMiw5LjYxMiwwLDAsMCw5LjY4MS05LjYxNSw5LjY2OCw5LjY2OCwwLDAsMC05LjY4MS05LjY4MSw5LjYxMyw5LjYxMywwLDAsMC05LjYxNiw5LjY4MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDIuNDE5KSIvPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTAuMDIxIDguMjQyKSI+PHBhdGggY2xhc3M9ImUiIGQ9Ik0tLjI0OC0uNUE2LjQzMSw2LjQzMSwwLDAsMS02LjctNi45NDksNi4zOTEsNi4zOTEsMCwwLDEtLjI0OC0xMy40LDYuNDMsNi40MywwLDAsMSw2LjIwNi02Ljk0OSw2LjQ3Miw2LjQ3MiwwLDAsMS0uMjQ4LS41TTUuMTA5LDQwLjM1NkgtNS42NjlWMi43MzJINS4xMDlaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2LjcwMSAxMy40MDIpIi8+PC9nPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMi44MTQgLTcyLjY5OSkiPjxwYXRoIGNsYXNzPSJlIiBkPSJNLS43LTEuMTc2LDEyLjcyLTMxLjgzMSwyNi4xNDMtMS4xNzZsOC42NDgtMTkuNzQ4TDQ0LjQ3Mi0xNi42LDI2LjE0MywyNS4xNTQsMTIuNzItNS41LS43LDI1LjE1NC0xOS4wMzItMTYuNmw5LjY4MS00LjMyNFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE5LjAzMiAzMS44MzEpIi8+PC9nPjxnIGNsYXNzPSJjIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0xMzkuMzIyKSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODguMzIzIDc5LjcyMykiPjxwYXRoIGNsYXNzPSJlIiBkPSJNLS43ODMtMS4zNjJILjgzMVY5LjM1MUgtLjc4M0EyMC4zNTQsMjAuMzU0LDAsMCwxLTIxLjE3Ni0xMS4wNDN2LTUuNDIxQTIwLjM1NCwyMC4zNTQsMCwwLDEtLjc4My0zNi44NTcsMjAuNDA5LDIwLjQwOSwwLDAsMSwxOS42NzUtMTYuNDY0djcuMDM1SC0xMC4yN0E5Ljc0MSw5Ljc0MSwwLDAsMC0uNzgzLTEuMzYybS4wNjUtMjQuNzgyYTkuNyw5LjcsMCwwLDAtOC45MDYsNS45MzhIOC4xMjRBOS43NzcsOS43NzcsMCwwLDAtLjcxOC0yNi4xNDQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIxLjE3NiAzNi44NTcpIi8+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEzMi4wODIgNjcuODQ5KSI+PHBhdGggY2xhc3M9ImUiIGQ9Ik0tMS4wNzItLjQ1NkEyMC40MDksMjAuNDA5LDAsMCwxLDE5LjM4NiwxOS45MzgsMjAuNDY0LDIwLjQ2NCwwLDAsMS0xLjA3Miw0MC40LDIwLjI5MywyMC4yOTMsMCwwLDEtMTQuNjksMzUuMTY4bC02Ljg0LDYuODQtNy40ODYtNy41NSw3LjQ4Ni03LjQ4N3YtMzkuM2gxMC43NzdWMi4wNjJBMTkuMywxOS4zLDAsMCwxLTEuMDcyLS40NTZNLTEwLjc1MywyMGE5LjYxMyw5LjYxMywwLDAsMCw5LjY4MSw5LjYxNkE5LjYxMyw5LjYxMywwLDAsMCw4LjYwOCwyMGE5LjY2OCw5LjY2OCwwLDAsMC05LjY4MS05LjY4MUE5LjY2OCw5LjY2OCwwLDAsMC0xMC43NTMsMjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI5LjAxNiAxMi4zMykiLz48L2c+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEzOC4zNTIgLTExMi41MDMpIj48cGF0aCBjbGFzcz0iZiIgZD0iTS0uNzYyLTEuMjU0bC0xNC4xNzctMTcuMVYtNy42NzloLTUuNjc4Vi0zMy45MjZsMTQuMTc4LDE3LjFWLTI3LjVILS43NjJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMC42MTcgMzMuOTI2KSIvPjwvZz48ZyBjbGFzcz0iYyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMTM5LjMyMikiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2Mi40NTkgMzAuMzg5KSI+PHBhdGggY2xhc3M9ImYiIGQ9Ik0tLjgyNiwwVjI1LjVILTYuNVYyMi4yYTEwLjE3MiwxMC4xNzIsMCwwLDEtNS4xLDEuMzI1QTEwLjcyMiwxMC43MjIsMCwwLDEtMjIuMzQ3LDEyLjc4MywxMC43NTIsMTAuNzUyLDAsMCwxLTExLjYsMi4wMDYsMTAuMTYzLDEwLjE2MywwLDAsMS02LjUsMy4zMzJWMFpNLTE2LjY2OSwxMi43ODNBNS4wMzUsNS4wMzUsMCwwLDAtMTEuNiwxNy44NDlhNS4wNjQsNS4wNjQsMCwwLDAsNS4xLTUuMDY2LDUuMDkzLDUuMDkzLDAsMCwwLTUuMS01LjEsNS4wNjUsNS4wNjUsMCwwLDAtNS4wNjYsNS4xIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMi4zNDcpIi8+PC9nPjwvZz48L2c+PC9zdmc+"
            alt=""
          />
          <div>
            <a
              href="https://www.linkedin.com/company/vainaweb/mycompany/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://www.instagram.com/vainaweb/" target="_blank">
              <FontAwesomeIcon icon={faSquareInstagram} />
            </a>
            <a
              href="https://www.facebook.com/vainaweb/?locale=pt_BR"
              target="_blank"
            >
              <FontAwesomeIcon icon={faSquareFacebook} />
            </a>
          </div>
        </figure>
        <div className={styles.gridImages}>
          <Image src={Pactual} className={styles.imagePactual} alt="" />
          <div className={styles.boxGridImages}>
            <Image style={{ padding: "10px" }} src={CircleColor} alt="" />
            <Image src={Arrecadacao} alt="" />
            <Image src={Educacao} alt="" />
            <Image src={IgualdadeGenero} alt="" />
            <Image src={TrabalhoEco} alt="" />
            <Image src={Idustria} alt="" />
            <Image src={Reducao} alt="" />
            <Image src={Implementation} alt="" />
          </div>
        </div>
        <p>2024 © VAI NA WEB | Todos os direitos reservados</p>
      </div>
    </footer>
  );
}
