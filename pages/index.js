import { useState } from "react";
import Image from "next/image";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  LineChart,
  Line,
  Legend,
} from "recharts";

export default function Dashboard() {
  // Student data
  const students = [
    {
      name: "Alice",
      avgScore: 92,
      weakSubject: "History",
      scores: { Math: 95, Science: 90, English: 88, History: 70 },
      attendance: "95%",
      rank: 1,
      grade: "A+",
      image: "/alice.jpg",
    },
    {
      name: "Bob",
      avgScore: 75,
      weakSubject: "Math",
      scores: { Math: 65, Science: 80, English: 78, History: 77 },
      attendance: "88%",
      rank: 5,
      grade: "B+",
      image: "/bob.jpg",
    },
    {
      name: "Charlie",
      avgScore: 60,
      weakSubject: "Science",
      scores: { Math: 58, Science: 50, English: 65, History: 67 },
      attendance: "80%",
      rank: 12,
      grade: "C",
      image: "/charlie.jpg",
    },
  ];

  const [selectedStudent, setSelectedStudent] = useState(students[0]);

  // Chart Data
  const skillData = Object.keys(selectedStudent.scores).map((subject) => ({
    subject,
    score: selectedStudent.scores[subject],
  }));

  const pieData = [
    { name: "Passed", value: selectedStudent.avgScore },
    { name: "Remaining", value: 100 - selectedStudent.avgScore },
  ];

  const COLORS = ["#82ca9d", "#f87171"];

  return (
    <div style={{ padding: "20px", background: "#f9fafb", minHeight: "100vh" }}>
      <h1 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "20px" }}>
        🎓 Student Dashboard
      </h1>

      {/* Student List */}
      <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        {students.map((student) => (
          <div
            key={student.name}
            onClick={() => setSelectedStudent(student)}
            style={{
              cursor: "pointer",
              textAlign: "center",
              padding: "10px",
              border:
                selectedStudent.name === student.name
                  ? "2px solid purple"
                  : "1px solid #ccc",
              borderRadius: "10px",
              width: "120px",
              background: "#fff",
              boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
            }}
          >
            <Image
              src={student.image}
              alt={student.name}
              width={80}
              height={80}
              style={{ borderRadius: "50%" }}
            />
            <p style={{ marginTop: "8px", fontWeight: "bold" }}>
              {student.name}
            </p>
          </div>
        ))}
      </div>

      {/* Selected Student Info */}
      <div
        style={{
          padding: "20px",
          background: "white",
          borderRadius: "12px",
          marginBottom: "20px",
          boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
        }}
      >
        <h2>{selectedStudent.name}’s Performance</h2>
        <p>📊 Average Score: {selectedStudent.avgScore}%</p>
        <p>⚠️ Weakest Subject: {selectedStudent.weakSubject}</p>
        <p>🎯 Rank: {selectedStudent.rank}</p>
        <p>📅 Attendance: {selectedStudent.attendance}</p>
        <p>🏆 Grade: {selectedStudent.grade}</p>
      </div>

      {/* Charts */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
        {/* Bar Chart */}
        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          <h3>Skill vs Score</h3>
          <BarChart width={400} height={250} data={skillData}>
            <XAxis dataKey="subject" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="score" fill="#8884d8" />
          </BarChart>
        </div>

        {/* Radar Chart */}
        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          <h3>Student Profile</h3>
          <RadarChart outerRadius={90} width={400} height={250} data={skillData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <Radar
              name={selectedStudent.name}
              dataKey="score"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
          </RadarChart>
        </div>

        {/* Line Chart */}
        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          <h3>Performance Trend</h3>
          <LineChart width={400} height={250} data={skillData}>
            <XAxis dataKey="subject" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="score" stroke="#82ca9d" />
          </LineChart>
        </div>

        {/* Pie Chart */}
        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          <h3>Score Distribution</h3>
          <PieChart width={400} height={250}>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
      </div>

      {/* Student Table */}
      <div
        style={{
          marginTop: "30px",
          background: "#fff",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
        }}
      >
        <h3>All Students Overview</h3>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "10px",
          }}
        >
          <thead>
            <tr style={{ background: "#f1f5f9" }}>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>Name</th>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>Average</th>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>Weakest</th>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>Attendance</th>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>Rank</th>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>Grade</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr key={s.name}>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{s.name}</td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  {s.avgScore}%
                </td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  {s.weakSubject}
                </td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  {s.attendance}
                </td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{s.rank}</td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{s.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
