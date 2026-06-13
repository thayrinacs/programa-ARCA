
/* ============ ROUTER ============ */
function go(page){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  const el=document.getElementById('page-'+page);
  if(el){el.classList.add('active');}
  document.querySelectorAll('.nav-links a').forEach(a=>{
    a.classList.toggle('active', a.dataset.p===page);
  });
  // destaca "Serviços" para qualquer página de serviço
  const servicos=['adocao','petDetalhe','adocaoForm','adocaoForm2','adocaoForm3','adocaoOk','denuncia','denunciaForm','denunciaOk','denunciaAcomp','denunciaDetalhe','castracao','agendamento','agendamentoRev','orientacoes','agendamentoOk','requisitos','cuidados'];
  const toggle=document.querySelector('.nav-dd-toggle');
  if(toggle){toggle.classList.toggle('active', servicos.includes(page));}
  window.scrollTo({top:0,behavior:'instant'});
}
/* ====== DADOS DOS PETS ====== */
const pets=[
  {n:"LUNA",esp:"Canino",img:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgMjYwIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI2MCI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjYwIiBmaWxsPSIjZGNlZWZiIi8+CjxjaXJjbGUgY3g9IjM0MC4wIiBjeT0iNTIuMCIgcj0iNDEuNiIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMC4xMiIvPgogICAgICAgIDxjaXJjbGUgY3g9IjYwLjAiIGN5PSIyMTMuMiIgcj0iMzEuMiIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMC4xMCIvPgogICAgICAgIDxjaXJjbGUgY3g9IjI4OC4wIiBjeT0iMjIxLjAiIHI9IjE4LjIwMDAwMDAwMDAwMDAwMyIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMC4xNCIvPgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMDAsMTUwKSBzY2FsZSgxLjQ1KSI+CiAgICA8ZWxsaXBzZSBjeD0iMCIgY3k9Ijc4IiByeD0iNzAiIHJ5PSIxNiIgZmlsbD0iIzAwMCIgb3BhY2l0eT0iMC4xMCIvPgogICAgPCEtLSBjb3JwbyAtLT4KICAgIDxwYXRoIGQ9Ik0tNDYgMzAgUS01MCA3NiAtMjAgNzggTDI0IDc4IFE1MiA3NiA0OCAzMCBRNDYgLTYgMCAtOCBRLTQ0IC02IC00NiAzMCBaIiBmaWxsPSIjZjVhNjIzIi8+CiAgICA8ZWxsaXBzZSBjeD0iLTIyIiBjeT0iNzQiIHJ4PSIxMyIgcnk9IjkiIGZpbGw9IiNkOThhMWEiLz4KICAgIDxlbGxpcHNlIGN4PSIyNCIgY3k9Ijc0IiByeD0iMTMiIHJ5PSI5IiBmaWxsPSIjZDk4YTFhIi8+CiAgICA8IS0tIGNhYmXDp2EgLS0+CiAgICA8Y2lyY2xlIGN4PSIwIiBjeT0iLTM0IiByPSI0MiIgZmlsbD0iI2Y1YTYyMyIvPgogICAgPCEtLSBvcmVsaGFzIC0tPgogICAgPHBhdGggZD0iTS00MCAtNTIgUS01OCAtODggLTM0IC03OCBRLTIyIC02NCAtMjggLTQ0IFoiIGZpbGw9IiNkOThhMWEiLz4KICAgIDxwYXRoIGQ9Ik00MCAtNTIgUTU4IC04OCAzNCAtNzggUTIyIC02NCAyOCAtNDQgWiIgZmlsbD0iI2Q5OGExYSIvPgogICAgPCEtLSBmb2NpbmhvIC0tPgogICAgPGVsbGlwc2UgY3g9IjAiIGN5PSItMTgiIHJ4PSIyMiIgcnk9IjE4IiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIwLjk1Ii8+CiAgICA8ZWxsaXBzZSBjeD0iMCIgY3k9Ii0yNiIgcng9IjciIHJ5PSI1IiBmaWxsPSIjMmEyMjMzIi8+CiAgICA8cGF0aCBkPSJNMCAtMjEgTDAgLTEyIE0wIC0xMiBRLTcgLTggLTExIC0xMiBNMCAtMTIgUTcgLTggMTEgLTEyIiBzdHJva2U9IiMyYTIyMzMiIHN0cm9rZS13aWR0aD0iMi41IiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICAgIDwhLS0gb2xob3MgLS0+CiAgICA8Y2lyY2xlIGN4PSItMTYiIGN5PSItNDIiIHI9IjYiIGZpbGw9IiMyYTIyMzMiLz4KICAgIDxjaXJjbGUgY3g9IjE2IiBjeT0iLTQyIiByPSI2IiBmaWxsPSIjMmEyMjMzIi8+CiAgICA8Y2lyY2xlIGN4PSItMTQiIGN5PSItNDQiIHI9IjIiIGZpbGw9IiNmZmYiLz4KICAgIDxjaXJjbGUgY3g9IjE4IiBjeT0iLTQ0IiByPSIyIiBmaWxsPSIjZmZmIi8+CiAgICA8IS0tIGNvbGVpcmEgLS0+CiAgICA8cGF0aCBkPSJNLTMwIDYgUTAgMTggMzAgNiIgc3Ryb2tlPSIjZTg1ZDRlIiBzdHJva2Utd2lkdGg9IjciIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogICAgPGNpcmNsZSBjeD0iMCIgY3k9IjE0IiByPSI2IiBmaWxsPSIjZjdjOTQ4Ii8+CiAgICA8L2c+Cjwvc3ZnPg=="},
  {n:"CHICO",esp:"Canino",img:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgMjYwIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI2MCI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjYwIiBmaWxsPSIjZmRlN2Q0Ii8+Cgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMDAsMTUwKSBzY2FsZSgxLjQ1KSI+CiAgICA8ZWxsaXBzZSBjeD0iMCIgY3k9Ijc4IiByeD0iNzAiIHJ5PSIxNiIgZmlsbD0iIzAwMCIgb3BhY2l0eT0iMC4xMCIvPgogICAgPCEtLSBjb3JwbyAtLT4KICAgIDxwYXRoIGQ9Ik0tNDYgMzAgUS01MCA3NiAtMjAgNzggTDI0IDc4IFE1MiA3NiA0OCAzMCBRNDYgLTYgMCAtOCBRLTQ0IC02IC00NiAzMCBaIiBmaWxsPSIjY2FhMDZhIi8+CiAgICA8ZWxsaXBzZSBjeD0iLTIyIiBjeT0iNzQiIHJ4PSIxMyIgcnk9IjkiIGZpbGw9IiNhODdmNDgiLz4KICAgIDxlbGxpcHNlIGN4PSIyNCIgY3k9Ijc0IiByeD0iMTMiIHJ5PSI5IiBmaWxsPSIjYTg3ZjQ4Ii8+CiAgICA8IS0tIGNhYmXDp2EgLS0+CiAgICA8Y2lyY2xlIGN4PSIwIiBjeT0iLTM0IiByPSI0MiIgZmlsbD0iI2NhYTA2YSIvPgogICAgPCEtLSBvcmVsaGFzIC0tPgogICAgPHBhdGggZD0iTS00MCAtNTIgUS01OCAtODggLTM0IC03OCBRLTIyIC02NCAtMjggLTQ0IFoiIGZpbGw9IiNhODdmNDgiLz4KICAgIDxwYXRoIGQ9Ik00MCAtNTIgUTU4IC04OCAzNCAtNzggUTIyIC02NCAyOCAtNDQgWiIgZmlsbD0iI2E4N2Y0OCIvPgogICAgPCEtLSBmb2NpbmhvIC0tPgogICAgPGVsbGlwc2UgY3g9IjAiIGN5PSItMTgiIHJ4PSIyMiIgcnk9IjE4IiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIwLjk1Ii8+CiAgICA8ZWxsaXBzZSBjeD0iMCIgY3k9Ii0yNiIgcng9IjciIHJ5PSI1IiBmaWxsPSIjMmEyMjMzIi8+CiAgICA8cGF0aCBkPSJNMCAtMjEgTDAgLTEyIE0wIC0xMiBRLTcgLTggLTExIC0xMiBNMCAtMTIgUTcgLTggMTEgLTEyIiBzdHJva2U9IiMyYTIyMzMiIHN0cm9rZS13aWR0aD0iMi41IiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICAgIDwhLS0gb2xob3MgLS0+CiAgICA8Y2lyY2xlIGN4PSItMTYiIGN5PSItNDIiIHI9IjYiIGZpbGw9IiMyYTIyMzMiLz4KICAgIDxjaXJjbGUgY3g9IjE2IiBjeT0iLTQyIiByPSI2IiBmaWxsPSIjMmEyMjMzIi8+CiAgICA8Y2lyY2xlIGN4PSItMTQiIGN5PSItNDQiIHI9IjIiIGZpbGw9IiNmZmYiLz4KICAgIDxjaXJjbGUgY3g9IjE4IiBjeT0iLTQ0IiByPSIyIiBmaWxsPSIjZmZmIi8+CiAgICA8IS0tIGNvbGVpcmEgLS0+CiAgICA8cGF0aCBkPSJNLTMwIDYgUTAgMTggMzAgNiIgc3Ryb2tlPSIjZTg1ZDRlIiBzdHJva2Utd2lkdGg9IjciIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogICAgPGNpcmNsZSBjeD0iMCIgY3k9IjE0IiByPSI2IiBmaWxsPSIjZjdjOTQ4Ii8+CiAgICA8L2c+Cjwvc3ZnPg=="},
  {n:"ATLAS",esp:"Canino",img:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgMjYwIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI2MCI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjYwIiBmaWxsPSIjZjNlOGZiIi8+CjxjaXJjbGUgY3g9IjM0MC4wIiBjeT0iNTIuMCIgcj0iNDEuNiIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMC4xMiIvPgogICAgICAgIDxjaXJjbGUgY3g9IjYwLjAiIGN5PSIyMTMuMiIgcj0iMzEuMiIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMC4xMCIvPgogICAgICAgIDxjaXJjbGUgY3g9IjI4OC4wIiBjeT0iMjIxLjAiIHI9IjE4LjIwMDAwMDAwMDAwMDAwMyIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMC4xNCIvPgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMDAsMTUwKSBzY2FsZSgxLjQ1KSI+CiAgICA8ZWxsaXBzZSBjeD0iMCIgY3k9Ijc4IiByeD0iNzAiIHJ5PSIxNiIgZmlsbD0iIzAwMCIgb3BhY2l0eT0iMC4xMCIvPgogICAgPCEtLSBjb3JwbyAtLT4KICAgIDxwYXRoIGQ9Ik0tNDYgMzAgUS01MCA3NiAtMjAgNzggTDI0IDc4IFE1MiA3NiA0OCAzMCBRNDYgLTYgMCAtOCBRLTQ0IC02IC00NiAzMCBaIiBmaWxsPSIjOWE4YTdhIi8+CiAgICA8ZWxsaXBzZSBjeD0iLTIyIiBjeT0iNzQiIHJ4PSIxMyIgcnk9IjkiIGZpbGw9IiM3YTZhNWEiLz4KICAgIDxlbGxpcHNlIGN4PSIyNCIgY3k9Ijc0IiByeD0iMTMiIHJ5PSI5IiBmaWxsPSIjN2E2YTVhIi8+CiAgICA8IS0tIGNhYmXDp2EgLS0+CiAgICA8Y2lyY2xlIGN4PSIwIiBjeT0iLTM0IiByPSI0MiIgZmlsbD0iIzlhOGE3YSIvPgogICAgPCEtLSBvcmVsaGFzIC0tPgogICAgPHBhdGggZD0iTS00MCAtNTIgUS01OCAtODggLTM0IC03OCBRLTIyIC02NCAtMjggLTQ0IFoiIGZpbGw9IiM3YTZhNWEiLz4KICAgIDxwYXRoIGQ9Ik00MCAtNTIgUTU4IC04OCAzNCAtNzggUTIyIC02NCAyOCAtNDQgWiIgZmlsbD0iIzdhNmE1YSIvPgogICAgPCEtLSBmb2NpbmhvIC0tPgogICAgPGVsbGlwc2UgY3g9IjAiIGN5PSItMTgiIHJ4PSIyMiIgcnk9IjE4IiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIwLjk1Ii8+CiAgICA8ZWxsaXBzZSBjeD0iMCIgY3k9Ii0yNiIgcng9IjciIHJ5PSI1IiBmaWxsPSIjMmEyMjMzIi8+CiAgICA8cGF0aCBkPSJNMCAtMjEgTDAgLTEyIE0wIC0xMiBRLTcgLTggLTExIC0xMiBNMCAtMTIgUTcgLTggMTEgLTEyIiBzdHJva2U9IiMyYTIyMzMiIHN0cm9rZS13aWR0aD0iMi41IiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICAgIDwhLS0gb2xob3MgLS0+CiAgICA8Y2lyY2xlIGN4PSItMTYiIGN5PSItNDIiIHI9IjYiIGZpbGw9IiMyYTIyMzMiLz4KICAgIDxjaXJjbGUgY3g9IjE2IiBjeT0iLTQyIiByPSI2IiBmaWxsPSIjMmEyMjMzIi8+CiAgICA8Y2lyY2xlIGN4PSItMTQiIGN5PSItNDQiIHI9IjIiIGZpbGw9IiNmZmYiLz4KICAgIDxjaXJjbGUgY3g9IjE4IiBjeT0iLTQ0IiByPSIyIiBmaWxsPSIjZmZmIi8+CiAgICA8IS0tIGNvbGVpcmEgLS0+CiAgICA8cGF0aCBkPSJNLTMwIDYgUTAgMTggMzAgNiIgc3Ryb2tlPSIjZTg1ZDRlIiBzdHJva2Utd2lkdGg9IjciIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogICAgPGNpcmNsZSBjeD0iMCIgY3k9IjE0IiByPSI2IiBmaWxsPSIjZjdjOTQ4Ii8+CiAgICA8L2c+Cjwvc3ZnPg=="},
  {n:"APOLO",esp:"Canino",img:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgMjYwIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI2MCI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjYwIiBmaWxsPSIjZGNmMGY3Ii8+Cgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMDAsMTUwKSBzY2FsZSgxLjQ1KSI+CiAgICA8ZWxsaXBzZSBjeD0iMCIgY3k9Ijc4IiByeD0iNzAiIHJ5PSIxNiIgZmlsbD0iIzAwMCIgb3BhY2l0eT0iMC4xMCIvPgogICAgPCEtLSBjb3JwbyAtLT4KICAgIDxwYXRoIGQ9Ik0tNDYgMzAgUS01MCA3NiAtMjAgNzggTDI0IDc4IFE1MiA3NiA0OCAzMCBRNDYgLTYgMCAtOCBRLTQ0IC02IC00NiAzMCBaIiBmaWxsPSIjYjA3YTRhIi8+CiAgICA8ZWxsaXBzZSBjeD0iLTIyIiBjeT0iNzQiIHJ4PSIxMyIgcnk9IjkiIGZpbGw9IiM4YTVhMzAiLz4KICAgIDxlbGxpcHNlIGN4PSIyNCIgY3k9Ijc0IiByeD0iMTMiIHJ5PSI5IiBmaWxsPSIjOGE1YTMwIi8+CiAgICA8IS0tIGNhYmXDp2EgLS0+CiAgICA8Y2lyY2xlIGN4PSIwIiBjeT0iLTM0IiByPSI0MiIgZmlsbD0iI2IwN2E0YSIvPgogICAgPCEtLSBvcmVsaGFzIC0tPgogICAgPHBhdGggZD0iTS00MCAtNTIgUS01OCAtODggLTM0IC03OCBRLTIyIC02NCAtMjggLTQ0IFoiIGZpbGw9IiM4YTVhMzAiLz4KICAgIDxwYXRoIGQ9Ik00MCAtNTIgUTU4IC04OCAzNCAtNzggUTIyIC02NCAyOCAtNDQgWiIgZmlsbD0iIzhhNWEzMCIvPgogICAgPCEtLSBmb2NpbmhvIC0tPgogICAgPGVsbGlwc2UgY3g9IjAiIGN5PSItMTgiIHJ4PSIyMiIgcnk9IjE4IiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIwLjk1Ii8+CiAgICA8ZWxsaXBzZSBjeD0iMCIgY3k9Ii0yNiIgcng9IjciIHJ5PSI1IiBmaWxsPSIjMmEyMjMzIi8+CiAgICA8cGF0aCBkPSJNMCAtMjEgTDAgLTEyIE0wIC0xMiBRLTcgLTggLTExIC0xMiBNMCAtMTIgUTcgLTggMTEgLTEyIiBzdHJva2U9IiMyYTIyMzMiIHN0cm9rZS13aWR0aD0iMi41IiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICAgIDwhLS0gb2xob3MgLS0+CiAgICA8Y2lyY2xlIGN4PSItMTYiIGN5PSItNDIiIHI9IjYiIGZpbGw9IiMyYTIyMzMiLz4KICAgIDxjaXJjbGUgY3g9IjE2IiBjeT0iLTQyIiByPSI2IiBmaWxsPSIjMmEyMjMzIi8+CiAgICA8Y2lyY2xlIGN4PSItMTQiIGN5PSItNDQiIHI9IjIiIGZpbGw9IiNmZmYiLz4KICAgIDxjaXJjbGUgY3g9IjE4IiBjeT0iLTQ0IiByPSIyIiBmaWxsPSIjZmZmIi8+CiAgICA8IS0tIGNvbGVpcmEgLS0+CiAgICA8cGF0aCBkPSJNLTMwIDYgUTAgMTggMzAgNiIgc3Ryb2tlPSIjZTg1ZDRlIiBzdHJva2Utd2lkdGg9IjciIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogICAgPGNpcmNsZSBjeD0iMCIgY3k9IjE0IiByPSI2IiBmaWxsPSIjZjdjOTQ4Ii8+CiAgICA8L2c+Cjwvc3ZnPg=="},
  {n:"MEL",esp:"Felino",img:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgMjYwIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI2MCI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjYwIiBmaWxsPSIjZGNlZWZiIi8+CjxjaXJjbGUgY3g9IjM0MC4wIiBjeT0iNTIuMCIgcj0iNDEuNiIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMC4xMiIvPgogICAgICAgIDxjaXJjbGUgY3g9IjYwLjAiIGN5PSIyMTMuMiIgcj0iMzEuMiIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMC4xMCIvPgogICAgICAgIDxjaXJjbGUgY3g9IjI4OC4wIiBjeT0iMjIxLjAiIHI9IjE4LjIwMDAwMDAwMDAwMDAwMyIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMC4xNCIvPgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMDAsMTUwKSBzY2FsZSgxLjQ1KSI+CiAgICA8ZWxsaXBzZSBjeD0iMCIgY3k9IjgwIiByeD0iNTgiIHJ5PSIxNCIgZmlsbD0iIzAwMCIgb3BhY2l0eT0iMC4xMCIvPgogICAgPCEtLSBjb3JwbyAtLT4KICAgIDxwYXRoIGQ9Ik0tNDAgMzAgUS00NCA3OCAtMTYgODAgTDIwIDgwIFE0NiA3OCA0MiAzMCBRNDAgMCAwIC0yIFEtMzggMCAtNDAgMzAgWiIgZmlsbD0iI2Y1YTYyMyIvPgogICAgPCEtLSBjYXVkYSAtLT4KICAgIDxwYXRoIGQ9Ik00MCA2MCBRNzggNTYgNzAgMjQgUTY2IDEwIDU2IDE2IFE2NCA0MCAzOCA0NiBaIiBmaWxsPSIjZDk4YTFhIi8+CiAgICA8IS0tIGNhYmXDp2EgLS0+CiAgICA8Y2lyY2xlIGN4PSIwIiBjeT0iLTMwIiByPSIzOCIgZmlsbD0iI2Y1YTYyMyIvPgogICAgPCEtLSBvcmVsaGFzIC0tPgogICAgPHBhdGggZD0iTS0zNCAtNTAgTC00NCAtODQgTC0xNCAtNjAgWiIgZmlsbD0iI2Y1YTYyMyIvPgogICAgPHBhdGggZD0iTTM0IC01MCBMNDQgLTg0IEwxNCAtNjAgWiIgZmlsbD0iI2Y1YTYyMyIvPgogICAgPHBhdGggZD0iTS0zMiAtNTQgTC0zNyAtNzQgTC0yMCAtNjAgWiIgZmlsbD0iI2YzZThmYiIvPgogICAgPHBhdGggZD0iTTMyIC01NCBMMzcgLTc0IEwyMCAtNjAgWiIgZmlsbD0iI2YzZThmYiIvPgogICAgPCEtLSBsaXN0cmFzIC0tPgogICAgPHBhdGggZD0iTS0xMiAtNTggTC0xMCAtNDYgTTAgLTYwIEwwIC00NyBNMTIgLTU4IEwxMCAtNDYiIHN0cm9rZT0iI2Q5OGExYSIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICAgIDwhLS0gb2xob3MgLS0+CiAgICA8ZWxsaXBzZSBjeD0iLTE1IiBjeT0iLTMyIiByeD0iNiIgcnk9IjgiIGZpbGw9IiMzYmIyNzMiLz4KICAgIDxlbGxpcHNlIGN4PSIxNSIgY3k9Ii0zMiIgcng9IjYiIHJ5PSI4IiBmaWxsPSIjM2JiMjczIi8+CiAgICA8ZWxsaXBzZSBjeD0iLTE1IiBjeT0iLTMyIiByeD0iMi41IiByeT0iNiIgZmlsbD0iIzJhMjIzMyIvPgogICAgPGVsbGlwc2UgY3g9IjE1IiBjeT0iLTMyIiByeD0iMi41IiByeT0iNiIgZmlsbD0iIzJhMjIzMyIvPgogICAgPCEtLSBmb2NpbmhvIC0tPgogICAgPHBhdGggZD0iTTAgLTIyIGwtNSA1IGgxMCBaIiBmaWxsPSIjZTg1ZDRlIi8+CiAgICA8cGF0aCBkPSJNMCAtMTcgdjUgTTAgLTEyIHEtNiAzIC0xMCAwIE0wIC0xMiBxNiAzIDEwIDAiIHN0cm9rZT0iIzJhMjIzMyIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICAgIDwhLS0gYmlnb2RlcyAtLT4KICAgIDxwYXRoIGQ9Ik0tOCAtMTYgTC0zNCAtMjAgTS04IC0xMiBMLTM0IC0xMCBNOCAtMTYgTDM0IC0yMCBNOCAtMTIgTDM0IC0xMCIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEuNSIgb3BhY2l0eT0iMC44Ii8+CiAgICA8L2c+Cjwvc3ZnPg=="},
  {n:"LUKE",esp:"Canino",img:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgMjYwIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI2MCI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjYwIiBmaWxsPSIjZmRlN2Q0Ii8+Cgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMDAsMTUwKSBzY2FsZSgxLjQ1KSI+CiAgICA8ZWxsaXBzZSBjeD0iMCIgY3k9Ijc4IiByeD0iNzAiIHJ5PSIxNiIgZmlsbD0iIzAwMCIgb3BhY2l0eT0iMC4xMCIvPgogICAgPCEtLSBjb3JwbyAtLT4KICAgIDxwYXRoIGQ9Ik0tNDYgMzAgUS01MCA3NiAtMjAgNzggTDI0IDc4IFE1MiA3NiA0OCAzMCBRNDYgLTYgMCAtOCBRLTQ0IC02IC00NiAzMCBaIiBmaWxsPSIjYzk4YTVhIi8+CiAgICA8ZWxsaXBzZSBjeD0iLTIyIiBjeT0iNzQiIHJ4PSIxMyIgcnk9IjkiIGZpbGw9IiNhODZhM2MiLz4KICAgIDxlbGxpcHNlIGN4PSIyNCIgY3k9Ijc0IiByeD0iMTMiIHJ5PSI5IiBmaWxsPSIjYTg2YTNjIi8+CiAgICA8IS0tIGNhYmXDp2EgLS0+CiAgICA8Y2lyY2xlIGN4PSIwIiBjeT0iLTM0IiByPSI0MiIgZmlsbD0iI2M5OGE1YSIvPgogICAgPCEtLSBvcmVsaGFzIC0tPgogICAgPHBhdGggZD0iTS00MCAtNTIgUS01OCAtODggLTM0IC03OCBRLTIyIC02NCAtMjggLTQ0IFoiIGZpbGw9IiNhODZhM2MiLz4KICAgIDxwYXRoIGQ9Ik00MCAtNTIgUTU4IC04OCAzNCAtNzggUTIyIC02NCAyOCAtNDQgWiIgZmlsbD0iI2E4NmEzYyIvPgogICAgPCEtLSBmb2NpbmhvIC0tPgogICAgPGVsbGlwc2UgY3g9IjAiIGN5PSItMTgiIHJ4PSIyMiIgcnk9IjE4IiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIwLjk1Ii8+CiAgICA8ZWxsaXBzZSBjeD0iMCIgY3k9Ii0yNiIgcng9IjciIHJ5PSI1IiBmaWxsPSIjMmEyMjMzIi8+CiAgICA8cGF0aCBkPSJNMCAtMjEgTDAgLTEyIE0wIC0xMiBRLTcgLTggLTExIC0xMiBNMCAtMTIgUTcgLTggMTEgLTEyIiBzdHJva2U9IiMyYTIyMzMiIHN0cm9rZS13aWR0aD0iMi41IiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICAgIDwhLS0gb2xob3MgLS0+CiAgICA8Y2lyY2xlIGN4PSItMTYiIGN5PSItNDIiIHI9IjYiIGZpbGw9IiMyYTIyMzMiLz4KICAgIDxjaXJjbGUgY3g9IjE2IiBjeT0iLTQyIiByPSI2IiBmaWxsPSIjMmEyMjMzIi8+CiAgICA8Y2lyY2xlIGN4PSItMTQiIGN5PSItNDQiIHI9IjIiIGZpbGw9IiNmZmYiLz4KICAgIDxjaXJjbGUgY3g9IjE4IiBjeT0iLTQ0IiByPSIyIiBmaWxsPSIjZmZmIi8+CiAgICA8IS0tIGNvbGVpcmEgLS0+CiAgICA8cGF0aCBkPSJNLTMwIDYgUTAgMTggMzAgNiIgc3Ryb2tlPSIjZTg1ZDRlIiBzdHJva2Utd2lkdGg9IjciIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogICAgPGNpcmNsZSBjeD0iMCIgY3k9IjE0IiByPSI2IiBmaWxsPSIjZjdjOTQ4Ii8+CiAgICA8L2c+Cjwvc3ZnPg=="},
  {n:"ANITTA",esp:"Felino",img:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgMjYwIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI2MCI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjYwIiBmaWxsPSIjZjNlOGZiIi8+CjxjaXJjbGUgY3g9IjM0MC4wIiBjeT0iNTIuMCIgcj0iNDEuNiIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMC4xMiIvPgogICAgICAgIDxjaXJjbGUgY3g9IjYwLjAiIGN5PSIyMTMuMiIgcj0iMzEuMiIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMC4xMCIvPgogICAgICAgIDxjaXJjbGUgY3g9IjI4OC4wIiBjeT0iMjIxLjAiIHI9IjE4LjIwMDAwMDAwMDAwMDAwMyIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMC4xNCIvPgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMDAsMTUwKSBzY2FsZSgxLjQ1KSI+CiAgICA8ZWxsaXBzZSBjeD0iMCIgY3k9IjgwIiByeD0iNTgiIHJ5PSIxNCIgZmlsbD0iIzAwMCIgb3BhY2l0eT0iMC4xMCIvPgogICAgPCEtLSBjb3JwbyAtLT4KICAgIDxwYXRoIGQ9Ik0tNDAgMzAgUS00NCA3OCAtMTYgODAgTDIwIDgwIFE0NiA3OCA0MiAzMCBRNDAgMCAwIC0yIFEtMzggMCAtNDAgMzAgWiIgZmlsbD0iIzlhYTViMSIvPgogICAgPCEtLSBjYXVkYSAtLT4KICAgIDxwYXRoIGQ9Ik00MCA2MCBRNzggNTYgNzAgMjQgUTY2IDEwIDU2IDE2IFE2NCA0MCAzOCA0NiBaIiBmaWxsPSIjN2M4Nzk0Ii8+CiAgICA8IS0tIGNhYmXDp2EgLS0+CiAgICA8Y2lyY2xlIGN4PSIwIiBjeT0iLTMwIiByPSIzOCIgZmlsbD0iIzlhYTViMSIvPgogICAgPCEtLSBvcmVsaGFzIC0tPgogICAgPHBhdGggZD0iTS0zNCAtNTAgTC00NCAtODQgTC0xNCAtNjAgWiIgZmlsbD0iIzlhYTViMSIvPgogICAgPHBhdGggZD0iTTM0IC01MCBMNDQgLTg0IEwxNCAtNjAgWiIgZmlsbD0iIzlhYTViMSIvPgogICAgPHBhdGggZD0iTS0zMiAtNTQgTC0zNyAtNzQgTC0yMCAtNjAgWiIgZmlsbD0iI2YzZThmYiIvPgogICAgPHBhdGggZD0iTTMyIC01NCBMMzcgLTc0IEwyMCAtNjAgWiIgZmlsbD0iI2YzZThmYiIvPgogICAgPCEtLSBsaXN0cmFzIC0tPgogICAgPHBhdGggZD0iTS0xMiAtNTggTC0xMCAtNDYgTTAgLTYwIEwwIC00NyBNMTIgLTU4IEwxMCAtNDYiIHN0cm9rZT0iIzdjODc5NCIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICAgIDwhLS0gb2xob3MgLS0+CiAgICA8ZWxsaXBzZSBjeD0iLTE1IiBjeT0iLTMyIiByeD0iNiIgcnk9IjgiIGZpbGw9IiMzYmIyNzMiLz4KICAgIDxlbGxpcHNlIGN4PSIxNSIgY3k9Ii0zMiIgcng9IjYiIHJ5PSI4IiBmaWxsPSIjM2JiMjczIi8+CiAgICA8ZWxsaXBzZSBjeD0iLTE1IiBjeT0iLTMyIiByeD0iMi41IiByeT0iNiIgZmlsbD0iIzJhMjIzMyIvPgogICAgPGVsbGlwc2UgY3g9IjE1IiBjeT0iLTMyIiByeD0iMi41IiByeT0iNiIgZmlsbD0iIzJhMjIzMyIvPgogICAgPCEtLSBmb2NpbmhvIC0tPgogICAgPHBhdGggZD0iTTAgLTIyIGwtNSA1IGgxMCBaIiBmaWxsPSIjZTg1ZDRlIi8+CiAgICA8cGF0aCBkPSJNMCAtMTcgdjUgTTAgLTEyIHEtNiAzIC0xMCAwIE0wIC0xMiBxNiAzIDEwIDAiIHN0cm9rZT0iIzJhMjIzMyIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICAgIDwhLS0gYmlnb2RlcyAtLT4KICAgIDxwYXRoIGQ9Ik0tOCAtMTYgTC0zNCAtMjAgTS04IC0xMiBMLTM0IC0xMCBNOCAtMTYgTDM0IC0yMCBNOCAtMTIgTDM0IC0xMCIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEuNSIgb3BhY2l0eT0iMC44Ii8+CiAgICA8L2c+Cjwvc3ZnPg=="},
  {n:"PRETINHO",esp:"Canino",img:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgMjYwIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI2MCI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjYwIiBmaWxsPSIjZGNmMGY3Ii8+Cgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMDAsMTUwKSBzY2FsZSgxLjQ1KSI+CiAgICA8ZWxsaXBzZSBjeD0iMCIgY3k9Ijc4IiByeD0iNzAiIHJ5PSIxNiIgZmlsbD0iIzAwMCIgb3BhY2l0eT0iMC4xMCIvPgogICAgPCEtLSBjb3JwbyAtLT4KICAgIDxwYXRoIGQ9Ik0tNDYgMzAgUS01MCA3NiAtMjAgNzggTDI0IDc4IFE1MiA3NiA0OCAzMCBRNDYgLTYgMCAtOCBRLTQ0IC02IC00NiAzMCBaIiBmaWxsPSIjNWE1NTYwIi8+CiAgICA8ZWxsaXBzZSBjeD0iLTIyIiBjeT0iNzQiIHJ4PSIxMyIgcnk9IjkiIGZpbGw9IiMzYTM1NDAiLz4KICAgIDxlbGxpcHNlIGN4PSIyNCIgY3k9Ijc0IiByeD0iMTMiIHJ5PSI5IiBmaWxsPSIjM2EzNTQwIi8+CiAgICA8IS0tIGNhYmXDp2EgLS0+CiAgICA8Y2lyY2xlIGN4PSIwIiBjeT0iLTM0IiByPSI0MiIgZmlsbD0iIzVhNTU2MCIvPgogICAgPCEtLSBvcmVsaGFzIC0tPgogICAgPHBhdGggZD0iTS00MCAtNTIgUS01OCAtODggLTM0IC03OCBRLTIyIC02NCAtMjggLTQ0IFoiIGZpbGw9IiMzYTM1NDAiLz4KICAgIDxwYXRoIGQ9Ik00MCAtNTIgUTU4IC04OCAzNCAtNzggUTIyIC02NCAyOCAtNDQgWiIgZmlsbD0iIzNhMzU0MCIvPgogICAgPCEtLSBmb2NpbmhvIC0tPgogICAgPGVsbGlwc2UgY3g9IjAiIGN5PSItMTgiIHJ4PSIyMiIgcnk9IjE4IiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIwLjk1Ii8+CiAgICA8ZWxsaXBzZSBjeD0iMCIgY3k9Ii0yNiIgcng9IjciIHJ5PSI1IiBmaWxsPSIjMmEyMjMzIi8+CiAgICA8cGF0aCBkPSJNMCAtMjEgTDAgLTEyIE0wIC0xMiBRLTcgLTggLTExIC0xMiBNMCAtMTIgUTcgLTggMTEgLTEyIiBzdHJva2U9IiMyYTIyMzMiIHN0cm9rZS13aWR0aD0iMi41IiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICAgIDwhLS0gb2xob3MgLS0+CiAgICA8Y2lyY2xlIGN4PSItMTYiIGN5PSItNDIiIHI9IjYiIGZpbGw9IiMyYTIyMzMiLz4KICAgIDxjaXJjbGUgY3g9IjE2IiBjeT0iLTQyIiByPSI2IiBmaWxsPSIjMmEyMjMzIi8+CiAgICA8Y2lyY2xlIGN4PSItMTQiIGN5PSItNDQiIHI9IjIiIGZpbGw9IiNmZmYiLz4KICAgIDxjaXJjbGUgY3g9IjE4IiBjeT0iLTQ0IiByPSIyIiBmaWxsPSIjZmZmIi8+CiAgICA8IS0tIGNvbGVpcmEgLS0+CiAgICA8cGF0aCBkPSJNLTMwIDYgUTAgMTggMzAgNiIgc3Ryb2tlPSIjZTg1ZDRlIiBzdHJva2Utd2lkdGg9IjciIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogICAgPGNpcmNsZSBjeD0iMCIgY3k9IjE0IiByPSI2IiBmaWxsPSIjZjdjOTQ4Ii8+CiAgICA8L2c+Cjwvc3ZnPg=="},
  {n:"HARLEY",esp:"Canino",img:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgMjYwIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI2MCI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjYwIiBmaWxsPSIjZGNlZWZiIi8+CjxjaXJjbGUgY3g9IjM0MC4wIiBjeT0iNTIuMCIgcj0iNDEuNiIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMC4xMiIvPgogICAgICAgIDxjaXJjbGUgY3g9IjYwLjAiIGN5PSIyMTMuMiIgcj0iMzEuMiIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMC4xMCIvPgogICAgICAgIDxjaXJjbGUgY3g9IjI4OC4wIiBjeT0iMjIxLjAiIHI9IjE4LjIwMDAwMDAwMDAwMDAwMyIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMC4xNCIvPgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMDAsMTUwKSBzY2FsZSgxLjQ1KSI+CiAgICA8ZWxsaXBzZSBjeD0iMCIgY3k9Ijc4IiByeD0iNzAiIHJ5PSIxNiIgZmlsbD0iIzAwMCIgb3BhY2l0eT0iMC4xMCIvPgogICAgPCEtLSBjb3JwbyAtLT4KICAgIDxwYXRoIGQ9Ik0tNDYgMzAgUS01MCA3NiAtMjAgNzggTDI0IDc4IFE1MiA3NiA0OCAzMCBRNDYgLTYgMCAtOCBRLTQ0IC02IC00NiAzMCBaIiBmaWxsPSIjZjVhNjIzIi8+CiAgICA8ZWxsaXBzZSBjeD0iLTIyIiBjeT0iNzQiIHJ4PSIxMyIgcnk9IjkiIGZpbGw9IiNkOThhMWEiLz4KICAgIDxlbGxpcHNlIGN4PSIyNCIgY3k9Ijc0IiByeD0iMTMiIHJ5PSI5IiBmaWxsPSIjZDk4YTFhIi8+CiAgICA8IS0tIGNhYmXDp2EgLS0+CiAgICA8Y2lyY2xlIGN4PSIwIiBjeT0iLTM0IiByPSI0MiIgZmlsbD0iI2Y1YTYyMyIvPgogICAgPCEtLSBvcmVsaGFzIC0tPgogICAgPHBhdGggZD0iTS00MCAtNTIgUS01OCAtODggLTM0IC03OCBRLTIyIC02NCAtMjggLTQ0IFoiIGZpbGw9IiNkOThhMWEiLz4KICAgIDxwYXRoIGQ9Ik00MCAtNTIgUTU4IC04OCAzNCAtNzggUTIyIC02NCAyOCAtNDQgWiIgZmlsbD0iI2Q5OGExYSIvPgogICAgPCEtLSBmb2NpbmhvIC0tPgogICAgPGVsbGlwc2UgY3g9IjAiIGN5PSItMTgiIHJ4PSIyMiIgcnk9IjE4IiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIwLjk1Ii8+CiAgICA8ZWxsaXBzZSBjeD0iMCIgY3k9Ii0yNiIgcng9IjciIHJ5PSI1IiBmaWxsPSIjMmEyMjMzIi8+CiAgICA8cGF0aCBkPSJNMCAtMjEgTDAgLTEyIE0wIC0xMiBRLTcgLTggLTExIC0xMiBNMCAtMTIgUTcgLTggMTEgLTEyIiBzdHJva2U9IiMyYTIyMzMiIHN0cm9rZS13aWR0aD0iMi41IiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICAgIDwhLS0gb2xob3MgLS0+CiAgICA8Y2lyY2xlIGN4PSItMTYiIGN5PSItNDIiIHI9IjYiIGZpbGw9IiMyYTIyMzMiLz4KICAgIDxjaXJjbGUgY3g9IjE2IiBjeT0iLTQyIiByPSI2IiBmaWxsPSIjMmEyMjMzIi8+CiAgICA8Y2lyY2xlIGN4PSItMTQiIGN5PSItNDQiIHI9IjIiIGZpbGw9IiNmZmYiLz4KICAgIDxjaXJjbGUgY3g9IjE4IiBjeT0iLTQ0IiByPSIyIiBmaWxsPSIjZmZmIi8+CiAgICA8IS0tIGNvbGVpcmEgLS0+CiAgICA8cGF0aCBkPSJNLTMwIDYgUTAgMTggMzAgNiIgc3Ryb2tlPSIjZTg1ZDRlIiBzdHJva2Utd2lkdGg9IjciIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogICAgPGNpcmNsZSBjeD0iMCIgY3k9IjE0IiByPSI2IiBmaWxsPSIjZjdjOTQ4Ii8+CiAgICA8L2c+Cjwvc3ZnPg=="},
  {n:"TOBBY",esp:"Canino",img:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgMjYwIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI2MCI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjYwIiBmaWxsPSIjZmRlN2Q0Ii8+Cgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMDAsMTUwKSBzY2FsZSgxLjQ1KSI+CiAgICA8ZWxsaXBzZSBjeD0iMCIgY3k9Ijc4IiByeD0iNzAiIHJ5PSIxNiIgZmlsbD0iIzAwMCIgb3BhY2l0eT0iMC4xMCIvPgogICAgPCEtLSBjb3JwbyAtLT4KICAgIDxwYXRoIGQ9Ik0tNDYgMzAgUS01MCA3NiAtMjAgNzggTDI0IDc4IFE1MiA3NiA0OCAzMCBRNDYgLTYgMCAtOCBRLTQ0IC02IC00NiAzMCBaIiBmaWxsPSIjY2FhMDZhIi8+CiAgICA8ZWxsaXBzZSBjeD0iLTIyIiBjeT0iNzQiIHJ4PSIxMyIgcnk9IjkiIGZpbGw9IiNhODdmNDgiLz4KICAgIDxlbGxpcHNlIGN4PSIyNCIgY3k9Ijc0IiByeD0iMTMiIHJ5PSI5IiBmaWxsPSIjYTg3ZjQ4Ii8+CiAgICA8IS0tIGNhYmXDp2EgLS0+CiAgICA8Y2lyY2xlIGN4PSIwIiBjeT0iLTM0IiByPSI0MiIgZmlsbD0iI2NhYTA2YSIvPgogICAgPCEtLSBvcmVsaGFzIC0tPgogICAgPHBhdGggZD0iTS00MCAtNTIgUS01OCAtODggLTM0IC03OCBRLTIyIC02NCAtMjggLTQ0IFoiIGZpbGw9IiNhODdmNDgiLz4KICAgIDxwYXRoIGQ9Ik00MCAtNTIgUTU4IC04OCAzNCAtNzggUTIyIC02NCAyOCAtNDQgWiIgZmlsbD0iI2E4N2Y0OCIvPgogICAgPCEtLSBmb2NpbmhvIC0tPgogICAgPGVsbGlwc2UgY3g9IjAiIGN5PSItMTgiIHJ4PSIyMiIgcnk9IjE4IiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIwLjk1Ii8+CiAgICA8ZWxsaXBzZSBjeD0iMCIgY3k9Ii0yNiIgcng9IjciIHJ5PSI1IiBmaWxsPSIjMmEyMjMzIi8+CiAgICA8cGF0aCBkPSJNMCAtMjEgTDAgLTEyIE0wIC0xMiBRLTcgLTggLTExIC0xMiBNMCAtMTIgUTcgLTggMTEgLTEyIiBzdHJva2U9IiMyYTIyMzMiIHN0cm9rZS13aWR0aD0iMi41IiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICAgIDwhLS0gb2xob3MgLS0+CiAgICA8Y2lyY2xlIGN4PSItMTYiIGN5PSItNDIiIHI9IjYiIGZpbGw9IiMyYTIyMzMiLz4KICAgIDxjaXJjbGUgY3g9IjE2IiBjeT0iLTQyIiByPSI2IiBmaWxsPSIjMmEyMjMzIi8+CiAgICA8Y2lyY2xlIGN4PSItMTQiIGN5PSItNDQiIHI9IjIiIGZpbGw9IiNmZmYiLz4KICAgIDxjaXJjbGUgY3g9IjE4IiBjeT0iLTQ0IiByPSIyIiBmaWxsPSIjZmZmIi8+CiAgICA8IS0tIGNvbGVpcmEgLS0+CiAgICA8cGF0aCBkPSJNLTMwIDYgUTAgMTggMzAgNiIgc3Ryb2tlPSIjZTg1ZDRlIiBzdHJva2Utd2lkdGg9IjciIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogICAgPGNpcmNsZSBjeD0iMCIgY3k9IjE0IiByPSI2IiBmaWxsPSIjZjdjOTQ4Ii8+CiAgICA8L2c+Cjwvc3ZnPg=="},
  {n:"MIA",esp:"Felino",img:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgMjYwIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI2MCI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjYwIiBmaWxsPSIjZjNlOGZiIi8+CjxjaXJjbGUgY3g9IjM0MC4wIiBjeT0iNTIuMCIgcj0iNDEuNiIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMC4xMiIvPgogICAgICAgIDxjaXJjbGUgY3g9IjYwLjAiIGN5PSIyMTMuMiIgcj0iMzEuMiIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMC4xMCIvPgogICAgICAgIDxjaXJjbGUgY3g9IjI4OC4wIiBjeT0iMjIxLjAiIHI9IjE4LjIwMDAwMDAwMDAwMDAwMyIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMC4xNCIvPgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMDAsMTUwKSBzY2FsZSgxLjQ1KSI+CiAgICA8ZWxsaXBzZSBjeD0iMCIgY3k9IjgwIiByeD0iNTgiIHJ5PSIxNCIgZmlsbD0iIzAwMCIgb3BhY2l0eT0iMC4xMCIvPgogICAgPCEtLSBjb3JwbyAtLT4KICAgIDxwYXRoIGQ9Ik0tNDAgMzAgUS00NCA3OCAtMTYgODAgTDIwIDgwIFE0NiA3OCA0MiAzMCBRNDAgMCAwIC0yIFEtMzggMCAtNDAgMzAgWiIgZmlsbD0iI2M5OGE1YSIvPgogICAgPCEtLSBjYXVkYSAtLT4KICAgIDxwYXRoIGQ9Ik00MCA2MCBRNzggNTYgNzAgMjQgUTY2IDEwIDU2IDE2IFE2NCA0MCAzOCA0NiBaIiBmaWxsPSIjYTg2YTNjIi8+CiAgICA8IS0tIGNhYmXDp2EgLS0+CiAgICA8Y2lyY2xlIGN4PSIwIiBjeT0iLTMwIiByPSIzOCIgZmlsbD0iI2M5OGE1YSIvPgogICAgPCEtLSBvcmVsaGFzIC0tPgogICAgPHBhdGggZD0iTS0zNCAtNTAgTC00NCAtODQgTC0xNCAtNjAgWiIgZmlsbD0iI2M5OGE1YSIvPgogICAgPHBhdGggZD0iTTM0IC01MCBMNDQgLTg0IEwxNCAtNjAgWiIgZmlsbD0iI2M5OGE1YSIvPgogICAgPHBhdGggZD0iTS0zMiAtNTQgTC0zNyAtNzQgTC0yMCAtNjAgWiIgZmlsbD0iI2YzZThmYiIvPgogICAgPHBhdGggZD0iTTMyIC01NCBMMzcgLTc0IEwyMCAtNjAgWiIgZmlsbD0iI2YzZThmYiIvPgogICAgPCEtLSBsaXN0cmFzIC0tPgogICAgPHBhdGggZD0iTS0xMiAtNTggTC0xMCAtNDYgTTAgLTYwIEwwIC00NyBNMTIgLTU4IEwxMCAtNDYiIHN0cm9rZT0iI2E4NmEzYyIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICAgIDwhLS0gb2xob3MgLS0+CiAgICA8ZWxsaXBzZSBjeD0iLTE1IiBjeT0iLTMyIiByeD0iNiIgcnk9IjgiIGZpbGw9IiMzYmIyNzMiLz4KICAgIDxlbGxpcHNlIGN4PSIxNSIgY3k9Ii0zMiIgcng9IjYiIHJ5PSI4IiBmaWxsPSIjM2JiMjczIi8+CiAgICA8ZWxsaXBzZSBjeD0iLTE1IiBjeT0iLTMyIiByeD0iMi41IiByeT0iNiIgZmlsbD0iIzJhMjIzMyIvPgogICAgPGVsbGlwc2UgY3g9IjE1IiBjeT0iLTMyIiByeD0iMi41IiByeT0iNiIgZmlsbD0iIzJhMjIzMyIvPgogICAgPCEtLSBmb2NpbmhvIC0tPgogICAgPHBhdGggZD0iTTAgLTIyIGwtNSA1IGgxMCBaIiBmaWxsPSIjZTg1ZDRlIi8+CiAgICA8cGF0aCBkPSJNMCAtMTcgdjUgTTAgLTEyIHEtNiAzIC0xMCAwIE0wIC0xMiBxNiAzIDEwIDAiIHN0cm9rZT0iIzJhMjIzMyIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICAgIDwhLS0gYmlnb2RlcyAtLT4KICAgIDxwYXRoIGQ9Ik0tOCAtMTYgTC0zNCAtMjAgTS04IC0xMiBMLTM0IC0xMCBNOCAtMTYgTDM0IC0yMCBNOCAtMTIgTDM0IC0xMCIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEuNSIgb3BhY2l0eT0iMC44Ii8+CiAgICA8L2c+Cjwvc3ZnPg=="},
  {n:"MAX",esp:"Canino",img:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgMjYwIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI2MCI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjYwIiBmaWxsPSIjZGNmMGY3Ii8+Cgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMDAsMTUwKSBzY2FsZSgxLjQ1KSI+CiAgICA8ZWxsaXBzZSBjeD0iMCIgY3k9Ijc4IiByeD0iNzAiIHJ5PSIxNiIgZmlsbD0iIzAwMCIgb3BhY2l0eT0iMC4xMCIvPgogICAgPCEtLSBjb3JwbyAtLT4KICAgIDxwYXRoIGQ9Ik0tNDYgMzAgUS01MCA3NiAtMjAgNzggTDI0IDc4IFE1MiA3NiA0OCAzMCBRNDYgLTYgMCAtOCBRLTQ0IC02IC00NiAzMCBaIiBmaWxsPSIjYjA3YTRhIi8+CiAgICA8ZWxsaXBzZSBjeD0iLTIyIiBjeT0iNzQiIHJ4PSIxMyIgcnk9IjkiIGZpbGw9IiM4YTVhMzAiLz4KICAgIDxlbGxpcHNlIGN4PSIyNCIgY3k9Ijc0IiByeD0iMTMiIHJ5PSI5IiBmaWxsPSIjOGE1YTMwIi8+CiAgICA8IS0tIGNhYmXDp2EgLS0+CiAgICA8Y2lyY2xlIGN4PSIwIiBjeT0iLTM0IiByPSI0MiIgZmlsbD0iI2IwN2E0YSIvPgogICAgPCEtLSBvcmVsaGFzIC0tPgogICAgPHBhdGggZD0iTS00MCAtNTIgUS01OCAtODggLTM0IC03OCBRLTIyIC02NCAtMjggLTQ0IFoiIGZpbGw9IiM4YTVhMzAiLz4KICAgIDxwYXRoIGQ9Ik00MCAtNTIgUTU4IC04OCAzNCAtNzggUTIyIC02NCAyOCAtNDQgWiIgZmlsbD0iIzhhNWEzMCIvPgogICAgPCEtLSBmb2NpbmhvIC0tPgogICAgPGVsbGlwc2UgY3g9IjAiIGN5PSItMTgiIHJ4PSIyMiIgcnk9IjE4IiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIwLjk1Ii8+CiAgICA8ZWxsaXBzZSBjeD0iMCIgY3k9Ii0yNiIgcng9IjciIHJ5PSI1IiBmaWxsPSIjMmEyMjMzIi8+CiAgICA8cGF0aCBkPSJNMCAtMjEgTDAgLTEyIE0wIC0xMiBRLTcgLTggLTExIC0xMiBNMCAtMTIgUTcgLTggMTEgLTEyIiBzdHJva2U9IiMyYTIyMzMiIHN0cm9rZS13aWR0aD0iMi41IiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICAgIDwhLS0gb2xob3MgLS0+CiAgICA8Y2lyY2xlIGN4PSItMTYiIGN5PSItNDIiIHI9IjYiIGZpbGw9IiMyYTIyMzMiLz4KICAgIDxjaXJjbGUgY3g9IjE2IiBjeT0iLTQyIiByPSI2IiBmaWxsPSIjMmEyMjMzIi8+CiAgICA8Y2lyY2xlIGN4PSItMTQiIGN5PSItNDQiIHI9IjIiIGZpbGw9IiNmZmYiLz4KICAgIDxjaXJjbGUgY3g9IjE4IiBjeT0iLTQ0IiByPSIyIiBmaWxsPSIjZmZmIi8+CiAgICA8IS0tIGNvbGVpcmEgLS0+CiAgICA8cGF0aCBkPSJNLTMwIDYgUTAgMTggMzAgNiIgc3Ryb2tlPSIjZTg1ZDRlIiBzdHJva2Utd2lkdGg9IjciIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogICAgPGNpcmNsZSBjeD0iMCIgY3k9IjE0IiByPSI2IiBmaWxsPSIjZjdjOTQ4Ii8+CiAgICA8L2c+Cjwvc3ZnPg=="},
];

/* ====== POPULAR FAQ (accordion) ====== */
const faqs=[
  {q:'Como posso adotar um animal pelo Projeto ARCA?',a:'Basta acessar a aba de Adoção, escolher o animal desejado e preencher o formulário de adoção responsável. Nossa equipe entrará em contato para uma entrevista e agendamento de visita.'},
  {q:'Quem tem prioridade no programa de castração?',a:'Moradores da Serra/ES devidamente comprovados, com prioridade para famílias de baixa renda inscritas no CadÚnico e protetores independentes cadastrados na prefeitura.'},
  {q:'Estarei pondo em risco para os meus afilhados pelo ARCA?',a:'Não. Todos os animais do programa passam por avaliação veterinária completa, com vacinas e exames em dia antes de serem disponibilizados para adoção.'},
  {q:'Quais animais podem ser castrados pela castração?',a:'Cães e gatos entre 6 meses e 7 anos de idade, saudáveis, com peso mínimo de 2kg. Fêmeas não podem estar no cio, gestantes ou amamentando.'},
  {q:'O que acontece após uma denúncia de maus-tratos?',a:'A denúncia passa por triagem técnica, fiscalização no local com apoio policial quando necessário, e o resgate do animal em situação de risco. Você acompanha tudo pelo número de protocolo.'},
  {q:'O que é o Projeto ARCA?',a:'É uma iniciativa institucional da Prefeitura da Serra/ES dedicada ao resgate, cuidado e proteção de animais em situação de abandono e vulnerabilidade.'}
];
const faqList=document.getElementById('faqList');
if(faqList){
  faqList.innerHTML=faqs.map((f,i)=>`
    <div class="card" style="padding:0;cursor:pointer" onclick="toggleFaq(${i})">
      <div style="display:flex;justify-content:space-between;align-items:center;padding:16px 20px">
        <b style="font-size:14px">${i+1}. ${f.q}</b>
        <span id="faq-ic-${i}" style="color:var(--purple);font-size:18px">+</span>
      </div>
      <div id="faq-${i}" style="display:none;padding:0 20px 16px;font-size:13px;color:var(--gray)">${f.a}</div>
    </div>`).join('');
}
function toggleFaq(i){
  const el=document.getElementById('faq-'+i);
  const ic=document.getElementById('faq-ic-'+i);
  const open=el.style.display==='block';
  el.style.display=open?'none':'block';
  ic.textContent=open?'+':'−';
}

/* ====== BANNER ROTATIVO ====== */
(function(){
  const track=document.getElementById('bannerTrack');
  if(!track) return;
  const slides=track.children.length;
  const pontos=document.getElementById('bannerPontos');
  let atual=0, timer;

  // cria os pontos de navegação
  for(let i=0;i<slides;i++){
    const ponto=document.createElement('span');
    ponto.addEventListener('click',()=>irPara(i));
    pontos.appendChild(ponto);
  }

  function render(){
    track.style.transform=`translateX(-${atual*100}%)`;
    [...pontos.children].forEach((p,i)=>p.classList.toggle('ativo',i===atual));
  }
  function irPara(i){ atual=(i+slides)%slides; render(); reiniciar(); }
  function proximo(){ irPara(atual+1); }
  function anterior(){ irPara(atual-1); }
  function reiniciar(){ clearInterval(timer); timer=setInterval(proximo,5000); }

  document.getElementById('bannerNext').addEventListener('click',proximo);
  document.getElementById('bannerPrev').addEventListener('click',anterior);

  render();
  reiniciar();
})();

/* página inicial */
go('login');


/* ===== Validação de formulários, feedback e máscaras ===== */
(function(){
  const STORAGE_KEY = 'arca_registros_simulados';

  function getActivePage(){
    return document.querySelector('.page.active, section.page[style*="display: block"], section.page:not([style*="display: none"])');
  }

  function visible(el){
    return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
  }

  function showToast(message, type='success'){
    const toastEl = document.getElementById('feedbackToast');
    const msgEl = document.getElementById('feedbackToastMessage');
    if(!toastEl || !msgEl){ alert(message); return; }
    msgEl.textContent = message;
    toastEl.className = 'toast align-items-center border-0 text-bg-' + (type === 'danger' ? 'danger' : 'success');
    if(window.bootstrap){ new bootstrap.Toast(toastEl, {delay: 2800}).show(); }
    else alert(message);
  }

  function ensureRequired(page){
    if(!page) return;
    const fields = page.querySelectorAll('input, select, textarea');
    fields.forEach((field) => {
      const placeholder = (field.getAttribute('placeholder') || '').toLowerCase();
      const type = (field.getAttribute('type') || '').toLowerCase();
      const isSearchOrFilter = field.classList.contains('filt') || placeholder.includes('buscar') || type === 'search';
      const isCheckbox = type === 'checkbox';
      if(!isSearchOrFilter && visible(field)) field.required = true;
      if(isCheckbox && visible(field)) field.required = true;
      if(field.tagName === 'SELECT' && field.options.length && field.options[0].textContent.toLowerCase().includes('selecione')){
        field.options[0].value = '';
      }
      if(field.type === 'email' || placeholder.includes('e-mail') || placeholder.includes('email') || placeholder.includes('@')){
        field.type = 'email';
      }
      if(placeholder.includes('cpf')) field.setAttribute('maxlength','14');
      if(placeholder.includes('telefone') || placeholder.includes('whatsapp')) field.setAttribute('maxlength','15');
    });
  }

  function clearErrors(page){
    page.querySelectorAll('.form-error').forEach(el => el.classList.remove('form-error'));
    page.querySelectorAll('.form-help').forEach(el => el.remove());
  }

  function addError(field, message){
    field.classList.add('form-error');
    const help = document.createElement('span');
    help.className = 'form-help';
    help.textContent = message;
    field.closest('.field, label, div')?.appendChild(help);
  }

  function validatePage(page){
    ensureRequired(page);
    clearErrors(page);
    const fields = [...page.querySelectorAll('input, select, textarea')].filter(visible);
    let ok = true;
    fields.forEach(field => {
      if(!field.required) return;
      const type = (field.getAttribute('type') || '').toLowerCase();
      if(type === 'checkbox' && !field.checked){ ok = false; addError(field, 'Confirme este termo para continuar.'); return; }
      if(!String(field.value || '').trim()){ ok = false; addError(field, 'Preencha este campo.'); return; }
      if(field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim())){ ok = false; addError(field, 'Digite um e-mail válido.'); }
    });
    if(!ok){
      const first = page.querySelector('.form-error');
      if(first) first.focus?.();
      showToast('Preencha os campos obrigatórios antes de continuar.', 'danger');
    }
    return ok;
  }

  function saveCurrentData(page, action){
    const data = {acao: action, dataHora: new Date().toLocaleString('pt-BR'), pagina: page?.id || ''};
    page?.querySelectorAll('input, select, textarea').forEach((field, index) => {
      const label = field.closest('.field')?.querySelector('label')?.textContent?.trim() || field.placeholder || field.name || ('campo_' + index);
      if(field.type === 'password') return;
      if(field.type === 'checkbox') data[label] = field.checked ? 'sim' : 'não';
      else data[label] = field.value;
    });
    const atual = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    atual.push(data);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(atual));
  }

  function actionMessage(text){
    const t = text.toLowerCase();
    if(t.includes('entrar')) return 'Login validado com sucesso.';
    if(t.includes('criar conta')) return 'Cadastro salvo com sucesso.';
    if(t.includes('denúncia') || t.includes('denuncia')) return 'Denúncia registrada e protocolo gerado.';
    if(t.includes('adoção') || t.includes('adotar')) return 'Solicitação de adoção registrada.';
    if(t.includes('castra') || t.includes('agendamento') || t.includes('confirmar')) return 'Agendamento registrado com sucesso.';
    if(t.includes('mensagem') || t.includes('enviar')) return 'Mensagem enviada com sucesso.';
    return 'Dados salvos com sucesso.';
  }

  document.addEventListener('click', function(event){
    const btn = event.target.closest('button');
    if(!btn) return;
    const onclick = btn.getAttribute('onclick') || '';
    const match = onclick.match(/go\('([^']+)'\)/);
    const text = btn.textContent.trim();
    const isSubmitLike = /entrar|criar conta|enviar|próxima etapa|proxima etapa|confirmar|finalizar|solicitar|agendar/i.test(text);
    if(!isSubmitLike) return;

    const page = btn.closest('.page') || getActivePage();
    event.preventDefault();
    event.stopImmediatePropagation();
    if(validatePage(page)){
      saveCurrentData(page, text);
      showToast(actionMessage(text));
      if(match && typeof window.go === 'function'){
        setTimeout(() => window.go(match[1]), 350);
      }
    }
  }, true);

  document.addEventListener('input', function(event){
    const f = event.target;
    if(!(f instanceof HTMLInputElement)) return;
    const ph = (f.placeholder || '').toLowerCase();
    let value = f.value.replace(/\D/g,'');
    if(ph.includes('cpf')){
      value = value.slice(0,11).replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})(\d{1,2})$/,'$1-$2');
      f.value = value;
    }
    if(ph.includes('telefone') || ph.includes('whatsapp')){
      value = value.slice(0,11).replace(/(\d{2})(\d)/,'($1) $2').replace(/(\d{5})(\d{1,4})$/,'$1-$2');
      f.value = value;
    }
  });

  window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('button').forEach((b) => { if(!b.getAttribute('type')) b.setAttribute('type','button'); });
    document.querySelectorAll('img:not([alt])').forEach((img) => img.setAttribute('alt','Imagem do Programa ARCA'));
    document.querySelectorAll('.page').forEach(ensureRequired);
  });
})();

/* ===== Detalhes individuais dos pets ===== */
(function(){
  const detalhesPets = [
    {
      idade:'6 meses', porte:'Médio', sexo:'Fêmea', sexoIcone:'♀️', comportamento:['BRINCALHONA','CARINHOSA','SOCIÁVEL'],
      resumo:'Luna é brincalhona e se dá muito bem com outros animais e crianças. Ela é extremamente dócil e está ansiosa por um novo lar.',
      sobre:'Luna é uma companheira fiel, inteligente e muito carinhosa. Resgatada pelo Programa ARCA, ela busca um lar definitivo para compartilhar sua alegria e gratidão.',
      saude:['✅ Castrada','✅ Microchipada','✅ Vacinação V10 e Raiva','✅ Vermifugada']
    },
    {
      idade:'2 anos', porte:'Pequeno', sexo:'Macho', sexoIcone:'♂️', comportamento:['CALMO','LEAL','DÓCIL'],
      resumo:'Chico é um cãozinho tranquilo, ideal para famílias que procuram um pet companheiro e fácil de adaptar à rotina da casa.',
      sobre:'Chico foi resgatado em situação de abandono e hoje está saudável, confiante e pronto para viver em um lar seguro e cheio de carinho.',
      saude:['✅ Castrado','✅ Microchipado','✅ Vacinação V10 e Raiva','✅ Vermifugado']
    },
    {
      idade:'1 ano', porte:'Grande', sexo:'Macho', sexoIcone:'♂️', comportamento:['ATIVO','PROTETOR','SOCIÁVEL'],
      resumo:'Atlas é cheio de energia, gosta de brincar e precisa de uma família com espaço e disposição para passeios.',
      sobre:'Atlas é inteligente, aprende rápido e tem ótimo comportamento com adultos. É uma ótima escolha para quem procura um cão ativo e presente.',
      saude:['✅ Castrado','✅ Microchipado','✅ Vacinação V10 e Raiva','✅ Vermifugado']
    },
    {
      idade:'8 meses', porte:'Médio', sexo:'Macho', sexoIcone:'♂️', comportamento:['ALEGRE','CARINHOSO','BRINCALHÃO'],
      resumo:'Apolo é alegre, curioso e adora receber atenção. Está pronto para encontrar uma família responsável.',
      sobre:'Apolo chegou ao programa ainda filhote e recebeu acompanhamento veterinário. Hoje está saudável e preparado para adoção.',
      saude:['✅ Castrado','✅ Microchipado','✅ Vacinação V10 e Raiva','✅ Vermifugado']
    },
    {
      idade:'1 ano', porte:'Pequeno', sexo:'Fêmea', sexoIcone:'♀️', comportamento:['CALMA','INDEPENDENTE','CARINHOSA'],
      resumo:'Mel é uma gatinha tranquila, carinhosa no tempo dela e perfeita para ambientes menores.',
      sobre:'Mel foi acolhida pelo ARCA após denúncia de abandono. Ela se recuperou bem e procura um lar paciente e amoroso.',
      saude:['✅ Castrada','✅ Microchipada','✅ Vacinação Antirrábica','✅ Vermifugada']
    },
    {
      idade:'9 meses', porte:'Médio', sexo:'Macho', sexoIcone:'♂️', comportamento:['CURIOSO','BRINCALHÃO','DÓCIL'],
      resumo:'Luke é um pet jovem, esperto e cheio de energia. Gosta de atenção, brincadeiras e passeios curtos.',
      sobre:'Luke foi acolhido pelo Programa ARCA ainda em fase de crescimento. Recebeu cuidados veterinários e agora procura uma família paciente e carinhosa.',
      saude:['✅ Castrado','✅ Microchipado','✅ Vacinação V10 e Raiva','✅ Vermifugado']
    },
    {
      idade:'2 anos', porte:'Pequeno', sexo:'Fêmea', sexoIcone:'♀️', comportamento:['CARINHOSA','CALMA','COMPANHEIRA'],
      resumo:'Anitta é uma cachorrinha dócil, tranquila e muito companheira. Ideal para quem busca um pet amoroso e de fácil convivência.',
      sobre:'Anitta passou por avaliação veterinária e se mostrou muito sociável. Ela está pronta para uma adoção responsável e segura.',
      saude:['✅ Castrada','✅ Microchipada','✅ Vacinação V10 e Raiva','✅ Vermifugada']
    },
    {
      idade:'1 ano e 6 meses', porte:'Pequeno', sexo:'Macho', sexoIcone:'♂️', comportamento:['TRANQUILO','OBSERVADOR','AFETUOSO'],
      resumo:'Pretinho é um gatinho calmo, observador e afetuoso. Gosta de ambientes tranquilos e de carinho no seu tempo.',
      sobre:'Pretinho foi resgatado após uma denúncia de abandono. Hoje está saudável, castrado e preparado para ganhar um lar definitivo.',
      saude:['✅ Castrado','✅ Microchipado','✅ Vacinação Antirrábica','✅ Vermifugado']
    },
    {
      idade:'3 anos', porte:'Grande', sexo:'Macho', sexoIcone:'♂️', comportamento:['LEAL','PROTETOR','OBEDIENTE'],
      resumo:'Harley é um cão forte, leal e obediente. Precisa de uma família responsável, com espaço e rotina de passeios.',
      sobre:'Harley recebeu acompanhamento do ARCA e demonstrou excelente evolução. É indicado para tutores que já tenham experiência com cães de porte maior.',
      saude:['✅ Castrado','✅ Microchipado','✅ Vacinação V10 e Raiva','✅ Vermifugado']
    },
    {
      idade:'3 anos', porte:'Médio', sexo:'Macho', sexoIcone:'♂️', comportamento:['CALMO','OBEDIENTE','COMPANHEIRO'],
      resumo:'Tobby é obediente, companheiro e já está acostumado com pessoas. Combina com famílias que buscam um pet mais tranquilo.',
      sobre:'Tobby passou por cuidados veterinários e demonstrou ótima adaptação. É dócil, atento e muito fiel.',
      saude:['✅ Castrado','✅ Microchipado','✅ Vacinação V10 e Raiva','✅ Vermifugado']
    },
    {
      idade:'7 meses', porte:'Pequeno', sexo:'Fêmea', sexoIcone:'♀️', comportamento:['CURIOSA','DÓCIL','SOCIÁVEL'],
      resumo:'Mia é uma filhote curiosa e dócil. Gosta de explorar o ambiente e se adapta bem a casas e apartamentos.',
      sobre:'Mia foi acolhida ainda pequena e recebeu todos os cuidados necessários. Está saudável e pronta para uma adoção responsável.',
      saude:['✅ Castrada','✅ Microchipada','✅ Vacinação Antirrábica','✅ Vermifugada']
    },
    {
      idade:'4 anos', porte:'Grande', sexo:'Macho', sexoIcone:'♂️', comportamento:['PROTETOR','TRANQUILO','LEAL'],
      resumo:'Max é um cão adulto, equilibrado e muito leal. Ideal para quem deseja um companheiro protetor e calmo.',
      sobre:'Max foi resgatado e passou por reabilitação. Hoje está confiante, saudável e preparado para um lar definitivo.',
      saude:['✅ Castrado','✅ Microchipado','✅ Vacinação V10 e Raiva','✅ Vermifugado']
    }
  ];

  function nomeFormatado(nome){
    return String(nome || '').toLowerCase().replace(/\b\w/g, letra => letra.toUpperCase());
  }

  pets.forEach((pet, index) => Object.assign(pet, detalhesPets[index] || detalhesPets[0]));

  window.abrirDetalhePet = function(index){
    localStorage.setItem('arca_pet_selecionado', String(index));
    atualizarDetalhePet(index);
    go('petDetalhe');
  };

  window.atualizarDetalhePet = function(index){
    const pet = pets[Number(index)] || pets[0];
    const page = document.getElementById('page-petDetalhe');
    if(!page || !pet) return;

    const nome = nomeFormatado(pet.n);
    const breadcrumb = page.querySelector('.breadcrumb b');
    if(breadcrumb) breadcrumb.textContent = nome;

    const imagem = page.querySelector('img');
    if(imagem){ imagem.src = pet.img; imagem.alt = nome; }

    const titulo = page.querySelector('h2');
    if(titulo) titulo.textContent = `Resumo da ${nome}`;

    const paragrafos = page.querySelectorAll('p');
    if(paragrafos[1]) paragrafos[1].textContent = pet.resumo;
    if(paragrafos[2]) paragrafos[2].textContent = pet.sobre;

    const infos = page.querySelectorAll('div[style*="background:var(--purple-bg)"] b');
    if(infos[0]) infos[0].textContent = pet.idade;
    if(infos[1]) infos[1].textContent = pet.porte;
    if(infos[2]) infos[2].textContent = pet.sexo;

    const sexoCard = infos[2]?.closest('div');
    const sexoIcone = sexoCard?.querySelector('div:first-child');
    if(sexoIcone) sexoIcone.textContent = pet.sexoIcone;

    const subtitulos = page.querySelectorAll('h3');
    if(subtitulos[0]) subtitulos[0].textContent = `Sobre ${pet.sexo === 'Fêmea' ? 'a' : 'o'} ${nome}`;

    const comportamentoArea = subtitulos[1]?.nextElementSibling;
    const comportamentoLabels = comportamentoArea?.querySelectorAll('div[style*="font-weight:700"]') || [];
    pet.comportamento.forEach((item, i) => { if(comportamentoLabels[i]) comportamentoLabels[i].textContent = item; });

    const saudeItens = page.querySelectorAll('div[style*="grid-template-columns:1fr 1fr"] div');
    pet.saude.forEach((item, i) => { if(saudeItens[i]) saudeItens[i].textContent = item; });

    const compartilhar = [...page.querySelectorAll('div')].find(el => el.textContent.trim().startsWith('COMPARTILHE'));
    if(compartilhar) compartilhar.firstElementChild.textContent = `COMPARTILHE ${nome.toUpperCase()}`;
  };

  const grid = document.getElementById('petGrid');
  if(grid){
    grid.innerHTML = pets.map((p, index) => `
      <div class="pet-card" role="button" tabindex="0" onclick="abrirDetalhePet(${index})" onkeydown="if(event.key==='Enter'){abrirDetalhePet(${index})}">
        <div class="img" style="background-image:url('${p.img}')"></div>
        <div class="body">
          <h4>${p.n}</h4>
          <div class="meta">Idade: ${p.idade}<br>Espécie: ${p.esp}<br>Porte: ${p.porte}<br>Comportamento: ${p.comportamento[0].toLowerCase()}</div>
          <button class="btn btn-orange">VER DETALHES</button>
        </div>
      </div>`).join('');
  }

  atualizarDetalhePet(localStorage.getItem('arca_pet_selecionado') || 0);
})();
