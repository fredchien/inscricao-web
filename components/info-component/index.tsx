import { Tooltip } from 'react-tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';

export default function InfoComponent({ Children }) {
  return (
    <div>
      <a className="my-anchor-element">
        <FontAwesomeIcon icon={faCircleQuestion} className="fa-regular fa-circle-question" style={{color: "#000", textDecoration: "none", fontSize: "1.2rem"}}/>
      </a>
      <Tooltip anchorSelect=".my-anchor-element" place="top">
        {Children}
      </Tooltip>
    </div>
  );
}
