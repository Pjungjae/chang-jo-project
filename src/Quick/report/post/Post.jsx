import React, {useState} from 'react'
import styled from 'styled-components';
import { Link} from 'react-router-dom'


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
`;


const TextArea = styled.textarea`
  padding: 0.5rem;
  width: 100%;
  height: 10rem;
  margin-bottom: 0.5rem;
`;

const SubmitButton = styled.button`
  padding: 0.5rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;

  &:hover {
    background-color: #0062cc;
  }
`;

const ReportForm = () => {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // API 호출
  };

    return(
        <Container>
      <h1>상세 내용</h1>
      <form onSubmit={handleSubmit}>
        <InputWrapper>
          <Label>내용</Label>
          <TextArea value={content} onChange={(e) => setContent(e.target.value)} />
        </InputWrapper>
        <Link to="/report" className="link">
        <SubmitButton type="submit">목록으로</SubmitButton>
        </Link>
      </form>
    </Container>
  );
};

export default ReportForm;