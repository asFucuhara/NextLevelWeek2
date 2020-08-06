import React, { useState, FormEvent } from 'react';
import './styles.css';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';

function TeacherList() {
  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  const [teachers, setTeachers] = useState([]);

  async function searchTeacher(e: FormEvent) {
    e.preventDefault();
    console.log(subject, week_day, time);
    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time,
      },
    });

    setTeachers(response.data);
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponiveis.">
        <form id="search-teachers" onSubmit={searchTeacher}>
          <Select
            name="subject"
            label="Matéria"
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            value={subject}
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Ciencias', label: 'Ciencias' },
              { value: 'Fisica', label: 'Fisica' },
              { value: 'Quimica', label: 'Quimica' },
              { value: 'Matemática', label: 'Matemática' },
            ]}
          />
          <Select
            name="week_day"
            label="Dia da semana"
            onChange={(e) => {
              setWeekDay(e.target.value);
            }}
            value={week_day}
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda' },
              { value: '2', label: 'Terça' },
              { value: '3', label: 'Quarta' },
              { value: '4', label: 'Quinta' },
              { value: '5', label: 'Sexta' },
              { value: '6', label: 'Sábado' },
            ]}
          />
          <Input
            type="time"
            name="time"
            label="Hora"
            onChange={(e) => {
              setTime(e.target.value);
            }}
            value={time}
          />

          <button type="submit">Buscar</button>
        </form>
      </PageHeader>
      <main>
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem teacher={teacher} key={teacher.id} />;
        })}
      </main>
    </div>
  );
}

export default TeacherList;
