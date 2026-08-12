package com.loanwise.backend.config;

import com.loanwise.backend.entity.Bank;
import com.loanwise.backend.repository.BankRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class BankDataLoader {

    @Bean
    CommandLineRunner loadBanks(BankRepository repository) {

        return args -> {

            if (repository.count() > 0) {
                return;
            }

            // HOME LOANS

            Bank sbiHome = new Bank();
            sbiHome.setBankName("SBI");
            sbiHome.setLoanType("HOME");
            sbiHome.setInterestRate(8.35);
            sbiHome.setProcessingFee(0.35);
            sbiHome.setMaxLoanAmount(10000000);
            repository.save(sbiHome);

            Bank hdfcHome = new Bank();
            hdfcHome.setBankName("HDFC Bank");
            hdfcHome.setLoanType("HOME");
            hdfcHome.setInterestRate(8.45);
            hdfcHome.setProcessingFee(0.50);
            hdfcHome.setMaxLoanAmount(15000000);
            repository.save(hdfcHome);

            Bank iciciHome = new Bank();
            iciciHome.setBankName("ICICI Bank");
            iciciHome.setLoanType("HOME");
            iciciHome.setInterestRate(8.50);
            iciciHome.setProcessingFee(0.50);
            iciciHome.setMaxLoanAmount(12000000);
            repository.save(iciciHome);

            Bank axisHome = new Bank();
            axisHome.setBankName("Axis Bank");
            axisHome.setLoanType("HOME");
            axisHome.setInterestRate(8.60);
            axisHome.setProcessingFee(0.50);
            axisHome.setMaxLoanAmount(10000000);
            repository.save(axisHome);


            // PERSONAL LOANS

            Bank sbiPersonal = new Bank();
            sbiPersonal.setBankName("SBI");
            sbiPersonal.setLoanType("PERSONAL");
            sbiPersonal.setInterestRate(11.00);
            sbiPersonal.setProcessingFee(1.00);
            sbiPersonal.setMaxLoanAmount(2000000);
            repository.save(sbiPersonal);

            Bank hdfcPersonal = new Bank();
            hdfcPersonal.setBankName("HDFC Bank");
            hdfcPersonal.setLoanType("PERSONAL");
            hdfcPersonal.setInterestRate(10.75);
            hdfcPersonal.setProcessingFee(1.00);
            hdfcPersonal.setMaxLoanAmount(2500000);
            repository.save(hdfcPersonal);

            Bank iciciPersonal = new Bank();
            iciciPersonal.setBankName("ICICI Bank");
            iciciPersonal.setLoanType("PERSONAL");
            iciciPersonal.setInterestRate(10.80);
            iciciPersonal.setProcessingFee(1.00);
            iciciPersonal.setMaxLoanAmount(2500000);
            repository.save(iciciPersonal);


            // CAR LOANS

            Bank sbiCar = new Bank();
            sbiCar.setBankName("SBI");
            sbiCar.setLoanType("CAR");
            sbiCar.setInterestRate(8.70);
            sbiCar.setProcessingFee(0.50);
            sbiCar.setMaxLoanAmount(3000000);
            repository.save(sbiCar);

            Bank hdfcCar = new Bank();
            hdfcCar.setBankName("HDFC Bank");
            hdfcCar.setLoanType("CAR");
            hdfcCar.setInterestRate(8.75);
            hdfcCar.setProcessingFee(0.50);
            hdfcCar.setMaxLoanAmount(3500000);
            repository.save(hdfcCar);

            Bank iciciCar = new Bank();
            iciciCar.setBankName("ICICI Bank");
            iciciCar.setLoanType("CAR");
            iciciCar.setInterestRate(8.80);
            iciciCar.setProcessingFee(0.50);
            iciciCar.setMaxLoanAmount(3000000);
            repository.save(iciciCar);

        };
    }
}