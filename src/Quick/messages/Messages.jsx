import React, {useState} from 'react'
import styled from 'styled-components';


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

const Select = styled.select`
  padding: 0.5rem;
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
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // API 호출
  };

    return(
        <Container>
      <h1>메세지 전송</h1>
      <form onSubmit={handleSubmit}>
        <InputWrapper>
          <Label>카테고리</Label>
          <Select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">선택해주세요</option>
            <option value="공지사항">공지사항</option>
            <option value="신고현황">신고현황</option>
          </Select>
        </InputWrapper>
        <InputWrapper>
          <Label>내용</Label>
          <TextArea value={content} onChange={(e) => setContent(e.target.value)} />
        </InputWrapper>
        <SubmitButton type="submit">전송</SubmitButton>
      </form>
    </Container>
  );
};

export default ReportForm;