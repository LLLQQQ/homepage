import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App from './App';
import RequestModal from './components/RequestModal';

describe("renders App component", () => {
  test('has invite btn', () => {
    render(<App />);
    const ele = screen.getByText(/Request an invite/i);
    expect(ele).toBeInTheDocument();
  });
  test('has page title', () => {
    render(<App />);
    const ele = screen.getByText("Broccoli & Co.");
    expect(ele).toBeInTheDocument();
  });
  test('has page footer', () => {
    render(<App />);
    const ele = screen.getByText(/All rights reserved/i);
    expect(ele).toBeInTheDocument();
  });
  test('has popup after click invite btn', () => {
    render(<App />);
    const inviteBtnEle = screen.getByText(/Request an invite/i);
    userEvent.click(inviteBtnEle);
    const sendBtnEle = screen.getByText(/Send/i);
    expect(sendBtnEle).toBeInTheDocument();
  });
  test('has popup after click invite btn', () => {
    render(<App />);
    const inviteBtnEle = screen.getByText(/Request an invite/i);
    userEvent.click(inviteBtnEle);
    const sendBtnEle = screen.getByText(/Send/i);
    expect(sendBtnEle).toBeInTheDocument();
  });
  test('input valid check', () => {
    render(<App />);
    const inviteBtnEle = screen.getByText(/Request an invite/i);
    userEvent.click(inviteBtnEle);
    const sendBtnEle = screen.getByText(/Send/i);
    userEvent.click(sendBtnEle);
    const inputEle = screen.getByPlaceholderText(/Full name/i);
    expect(inputEle).toHaveClass("invalid");
  });
  test('input name', () => {
    render(<App />);
    const inviteBtnEle = screen.getByText(/Request an invite/i);
    userEvent.click(inviteBtnEle);
    const inputEle = screen.getByPlaceholderText(/Full name/i);
    const val = "My Name";
    userEvent.type(inputEle, val);
    const textEle = screen.getByDisplayValue(val);
    expect(textEle).toBeInTheDocument();
  });
  test('input email', () => {
    render(<App />);
    const inviteBtnEle = screen.getByText(/Request an invite/i);
    userEvent.click(inviteBtnEle);
    const inputEle = screen.getByPlaceholderText("Email");
    const val = "myemail@test.com";
    userEvent.type(inputEle, val);
    const textEle = screen.getByDisplayValue(val);
    expect(textEle).toBeInTheDocument();
  });
  test('input confirm email', () => {
    render(<App />);
    const inviteBtnEle = screen.getByText(/Request an invite/i);
    userEvent.click(inviteBtnEle);
    const inputEle = screen.getByPlaceholderText("Confirm email");
    const val = "myemail@test.com";
    userEvent.type(inputEle, val);
    const textEle = screen.getByDisplayValue(val);
    expect(textEle).toBeInTheDocument();
  });
  test('sending or loading status', () => {
    render(<RequestModal />);
    let inputEle = screen.getByPlaceholderText(/Full name/i);
    userEvent.type(inputEle, "My Name");
    inputEle = screen.getByPlaceholderText("Email");
    userEvent.type(inputEle, "myemail@test.com");
    inputEle = screen.getByPlaceholderText("Confirm email");
    userEvent.type(inputEle, "myemail@test.com");
    const sendBtnEle = screen.getByText(/Send/i);
    userEvent.click(sendBtnEle);
    const loadingBtnEle = screen.getByText("Sending, please wait...");
    expect(loadingBtnEle).toBeInTheDocument();
  });
});

