import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const Updatemark = () => {
  const [trainee_Id, setTrainee_Id] = useState("");
  const [trade_id, setTrade_id] = useState("");
  const [modulename, setModulename] = useState("");
  const [formative_assessment, setFormative_assessment] = useState("");
  const [summative_assessment, setSummative_assessment] = useState("");
  const [loading, setLoading] = useState(false);

  const { markid } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:2000/selectmarks/${markid}`)
      .then(res => {
        setTrainee_Id(res.data.trainee_Id);
        setTrade_id(res.data.trade_id);
        setModulename(res.data.modulename);
        setFormative_assessment(res.data.formative_assessment);
        setSummative_assessment(res.data.summative_assessment);
      })
      .catch(err => {
        console.error(err);
        alert('Failed to fetch mark data');
      });
  }, [markid]);

  const handleUpdate = () => {
    setLoading(true);
    axios.put(`http://localhost:2000/updatemarks/${markid}`, {
      trainee_Id,
      trade_id,
      modulename,
      formative_assessment,
      summative_assessment
    })
      .then(res => {
        alert('Data updated successfully');
        navigate('/selectmark');
      })
      .catch(err => {
        console.error(err);
        alert('Failed to update data: ' + err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!trainee_Id || !trade_id || !modulename || !formative_assessment || !summative_assessment) {
      alert('Please fill in all fields');
      return;
    }

    if (isNaN(formative_assessment) || isNaN(summative_assessment)) {
      alert('Assessments must be numeric values');
      return;
    }

    handleUpdate();
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='container shadow w-50 p-4 card mt-5'>
        <h2 className='text-center text-primary mb-4'>UPDATE MARKS</h2>

        <input type="number" value={trainee_Id} onChange={(e) => setTrainee_Id(e.target.value)}
          className='form-control mb-3' placeholder='Trainee ID' />

        <input type="number" value={trade_id} onChange={(e) => setTrade_id(e.target.value)}
          className='form-control mb-3' placeholder='Trade ID' />

        <input type="text" value={modulename} onChange={(e) => setModulename(e.target.value)}
          className='form-control mb-3' placeholder='Module Name' />

        <input type="text" value={formative_assessment} onChange={(e) => setFormative_assessment(e.target.value)}
          className='form-control mb-3' placeholder='Formative Assessment' />

        <input type="text" value={summative_assessment} onChange={(e) => setSummative_assessment(e.target.value)}
          className='form-control mb-3' placeholder='Summative Assessment' />

        <button type='submit' className='btn btn-success rounded-pill w-100' disabled={loading}>
          {loading ? 'Updating...' : 'Update'}
        </button>
      </form>
    </div>
  )
}

export default Updatemark;
