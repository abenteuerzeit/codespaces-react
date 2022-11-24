import React from 'react';
import './LessonLog.css';

class LessonLog extends React.Component {
  render() {
    return (
      <div className="LessonLog">
        <h1 className="h1" >Lesson Log</h1>
        <dl>
            <dt>Student Name:</dt>
            <dd>Adrian Mróz</dd>
            <dt>Student ID:</dt>
            <dd>123456789</dd>
            <dt>Student Email:</dt>
            <dd>amroz.muzyka@gmail.com </dd>
            <dt>Phone Number</dt>
            <dd>123-456-7890</dd>
            <dt>Date of Birth</dt>
            <dd>01/01/1970</dd>
            <dt>English level</dt>
            <dd>Beginner</dd>
            <dt>Goals</dt>
            <dd>Pass my English matura exam</dd>
            <dt>Notes</dt>
            <dd>
            <small>Lorem ipsum....</small>
            <button className='btn'>Edit Notes</button>
            </dd>
        </dl>
        <table className='table'>
            <tr className='table-row-header'>
                <th className='id'>Id</th> 
                <th className='date'>Date</th>
                <th className='subject'>Subject</th>
                <th className='duration'>Time < br/><small>(min.)</small></th>
                <th className='paid'>Paid</th>
                <th className='notes'>Notes</th>
            </tr>
            <tr className='tableRow'>
                <td className='table-cell'>1</td>
                <td className='table-cell'>Nov. 22, 2022</td>
                <td className='table-cell'>Present Simple. How to conjugate verbs using statements, negatives, and questions. </td>
                <td className='table-cell'>60</td>
                <td className='table-cell'>Nov. 23, 2022</td>
                <td className='table-cell'>HW: Complete activity questions </td>
            </tr>
        </table>

        <hr />
        <h2>New Lesson </h2>

        <div id='nextLesson'>
            <form>
                <label for='date'>Date</label>
                <input type='date' id='date' name='date' />
                <label for='subject'>Subject</label>
                <input type='text' id='subject' name='subject' />
                <label for='duration'>Duration</label>
                <input type='number' id='duration' name='duration' />
                <label for='paid'>Paid</label>
                <input type='date' id='paid' name='paid' />
                <label for='notes'>Notes</label>
                <textarea id='notes' name='notes' rows='4' cols='50'></textarea>
            </form>
            <button className='btn btn-primary'>
                    <figure id='start-video-call'>
                        <img src='https://img.icons8.com/ios/50/000000/video-call.png' alt='Start Video Call' />
                        <figcaption>Start Lesson</figcaption>
                    </figure>
            </button>
        </div>
    </div>
    );
  }
}

LessonLog.propTypes = {
    // bla: PropTypes.string,
};

LessonLog.defaultProps = {
    // bla: 'bla',
};

export default LessonLog;
