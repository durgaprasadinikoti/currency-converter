"use client";
import { useState, useEffect } from "react";
import InputWrapper from "./InputWrapper";
import styles from "./ConverterForm.module.css";
import CryptoCurrencySelectBox from "./CryptoCurrencySelectBox";
import InputField from "./InputField";
import CurrencySelectBox from "./currencySelectBox";
import Button from "./Button";

const ConverterForm = () => {
  const [selectedCryptoCurrncy, setSelectedCryptoCurrncy] = useState();
  const [cryptoCurrncies, setCryptoCurrncies] = useState([]);
  const [amount, setAmount] = useState(1);
  const [targetCurrencyList, setTargetCurrencyList] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [convertedAmount, setConvertedAmount] = useState(1);

  useEffect(() => {
    fetchCryptoCurrencies();
  }, []);

  const fetchCryptoCurrencies = async () => {
    try {
      const response = await fetch(
        "http://localhost:3001/api/getCryptoCurrencies"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      setCryptoCurrncies(result);
      setTargetCurrencyList(result[0].supportedCurrencies);
      setSelectedCryptoCurrncy(result[0].symbol);
      const postData = {
        cryptoSymbol: result[0].symbol,
        fiatCurrency: result[0].supportedCurrencies[0],
        amount: amount,
      };
      fetchConvertedAmountValue(postData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p>loading please wait...</p>;
  }

  const handleCryptoCurrencyChange = (value) => {
    const supportedCurrenciesList = cryptoCurrncies.filter(
      (item) => item.symbol === value
    );
    setSelectedCryptoCurrncy(value);
    setTargetCurrencyList(supportedCurrenciesList[0].supportedCurrencies);

    const postData = {
        cryptoSymbol: value,
        fiatCurrency: supportedCurrenciesList[0].supportedCurrencies[0],
        amount: Number(amount),
      };
      fetchConvertedAmountValue(postData);
  };

  const handleCurrencyChange = (value) => {
    const postData = {
        cryptoSymbol: selectedCryptoCurrncy,
        fiatCurrency: value,
        amount: Number(amount),
      };
      fetchConvertedAmountValue(postData);

  }

  const handleAmountChange = (value) => {
    if (/^\d+$/.test(value) || value === "") {
      const sanitizedValue = value.replace(/^0+/, "");
      setAmount(Number(sanitizedValue));
      const postData = {
        cryptoSymbol: selectedCryptoCurrncy,
        fiatCurrency: targetCurrencyList[0],
        amount: Number(sanitizedValue),
      };
      fetchConvertedAmountValue(postData);
    }
  };

  const fetchConvertedAmountValue = async (postData) => {
    try {
      const response = await fetch(
        "http://localhost:3001/api/getCryptoConverterAmount",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postData),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      setConvertedAmount(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form>
      <InputWrapper>
        <div className={styles["fieldContainer"]}>
          <InputField value={amount} onChange={handleAmountChange} />
          <CryptoCurrencySelectBox
            data={cryptoCurrncies}
            onSelect={handleCryptoCurrencyChange}
          />
        </div>
      </InputWrapper>

      <InputWrapper>
        <div className={styles["fieldContainer"]}>
          <InputField value={convertedAmount} disabled />
          <CurrencySelectBox data={targetCurrencyList} onSelect={handleCurrencyChange} />
        </div>
      </InputWrapper>

      {/* <Button>Convert Currency</Button> */}
    </form>
  );
};

export default ConverterForm;
