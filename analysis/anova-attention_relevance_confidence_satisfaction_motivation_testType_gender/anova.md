ANOVA test for
`attention,relevance,confidence,satisfaction,motivation`\~`testType`\*`gender`
================
Geiser C. Challco <geiser@alumni.usp.br>

-   [Initial Variables and Data](#initial-variables-and-data)
    -   [Descriptive statistics of initial
        data](#descriptive-statistics-of-initial-data)
-   [Checking of Assumptions](#checking-of-assumptions)
    -   [Assumption: Symmetry and treatment of
        outliers](#assumption-symmetry-and-treatment-of-outliers)
    -   [Assumption: Normality distribution of
        data](#assumption-normality-distribution-of-data)
    -   [Assumption: Homogeneity of data
        distribution](#assumption-homogeneity-of-data-distribution)
-   [Saving the Data with Normal Distribution Used for Performing ANOVA
    test](#saving-the-data-with-normal-distribution-used-for-performing-anova-test)
-   [Computation of ANOVA test and Pairwise
    Comparison](#computation-of-anova-test-and-pairwise-comparison)
    -   [ANOVA test](#anova-test)
    -   [Pairwise comparison](#pairwise-comparison)
    -   [Descriptive Statistic of Estimated Marginal
        Means](#descriptive-statistic-of-estimated-marginal-means)
    -   [Anova plots for the dependent variable
        “attention”](#anova-plots-for-the-dependent-variable-attention)
    -   [Anova plots for the dependent variable
        “relevance”](#anova-plots-for-the-dependent-variable-relevance)
    -   [Anova plots for the dependent variable
        “confidence”](#anova-plots-for-the-dependent-variable-confidence)
    -   [Anova plots for the dependent variable
        “satisfaction”](#anova-plots-for-the-dependent-variable-satisfaction)
    -   [Anova plots for the dependent variable
        “motivation”](#anova-plots-for-the-dependent-variable-motivation)
    -   [Textual Report](#textual-report)
-   [Tips and References](#tips-and-references)

## Initial Variables and Data

-   R-script file: [../code/anova.R](../code/anova.R)
-   Initial table file:
    [../data/initial-table.csv](../data/initial-table.csv)
-   Data for attention
    [../data/table-for-attention.csv](../data/table-for-attention.csv)
-   Data for relevance
    [../data/table-for-relevance.csv](../data/table-for-relevance.csv)
-   Data for confidence
    [../data/table-for-confidence.csv](../data/table-for-confidence.csv)
-   Data for satisfaction
    [../data/table-for-satisfaction.csv](../data/table-for-satisfaction.csv)
-   Data for motivation
    [../data/table-for-motivation.csv](../data/table-for-motivation.csv)
-   Table without outliers and normal distribution of data:
    [../data/table-with-normal-distribution.csv](../data/table-with-normal-distribution.csv)
-   Other data files: [../data/](../data/)
-   Files related to the presented results: [../results/](../results/)

### Descriptive statistics of initial data

| testType | gender | variable     |   n |  mean | median |   min |   max |    sd |    se |    ci |   iqr | symmetry | skewness | kurtosis |
|:---------|:-------|:-------------|----:|------:|-------:|------:|------:|------:|------:|------:|------:|:---------|---------:|---------:|
| default  | Homem  | attention    |  21 | 3.774 |  3.750 | 2.833 | 4.833 | 0.574 | 0.125 | 0.261 | 0.833 | YES      |    0.049 |   -1.039 |
| default  | Mulher | attention    |  19 | 3.811 |  3.917 | 1.833 | 5.000 | 0.845 | 0.194 | 0.407 | 1.042 | NO       |   -0.754 |   -0.384 |
| stFemale | Homem  | attention    |  18 | 4.030 |  4.000 | 3.333 | 5.000 | 0.487 | 0.115 | 0.242 | 0.521 | YES      |    0.399 |   -0.796 |
| stFemale | Mulher | attention    |  25 | 3.678 |  3.667 | 1.917 | 5.000 | 0.808 | 0.162 | 0.333 | 1.326 | YES      |   -0.196 |   -0.846 |
| stMale   | Homem  | attention    |  25 | 3.430 |  3.500 | 2.083 | 4.250 | 0.511 | 0.102 | 0.211 | 0.750 | NO       |   -0.569 |   -0.149 |
| stMale   | Mulher | attention    |  14 | 3.675 |  3.708 | 2.250 | 5.000 | 0.758 | 0.202 | 0.437 | 1.055 | YES      |   -0.147 |   -0.982 |
| NA       | NA     | attention    | 122 | 3.716 |  3.750 | 1.833 | 5.000 | 0.686 | 0.062 | 0.123 | 0.917 | YES      |   -0.317 |   -0.173 |
| default  | Homem  | relevance    |  21 | 3.273 |  3.222 | 2.333 | 4.333 | 0.493 | 0.108 | 0.224 | 0.556 | YES      |    0.210 |   -0.434 |
| default  | Mulher | relevance    |  19 | 3.246 |  3.000 | 2.111 | 4.667 | 0.719 | 0.165 | 0.346 | 0.833 | YES      |    0.373 |   -0.786 |
| stFemale | Homem  | relevance    |  18 | 3.616 |  3.722 | 1.889 | 4.778 | 0.766 | 0.180 | 0.381 | 0.722 | NO       |   -0.548 |   -0.195 |
| stFemale | Mulher | relevance    |  25 | 3.376 |  3.333 | 2.111 | 4.556 | 0.729 | 0.146 | 0.301 | 1.111 | YES      |    0.037 |   -1.110 |
| stMale   | Homem  | relevance    |  25 | 2.903 |  3.000 | 1.444 | 4.667 | 0.796 | 0.159 | 0.329 | 1.222 | YES      |    0.265 |   -0.622 |
| stMale   | Mulher | relevance    |  14 | 3.169 |  3.056 | 1.667 | 5.000 | 0.827 | 0.221 | 0.477 | 0.611 | YES      |    0.496 |    0.034 |
| NA       | NA     | relevance    | 122 | 3.253 |  3.222 | 1.444 | 5.000 | 0.744 | 0.067 | 0.133 | 0.889 | YES      |    0.073 |   -0.376 |
| default  | Homem  | confidence   |  21 | 3.503 |  3.556 | 2.444 | 4.333 | 0.455 | 0.099 | 0.207 | 0.653 | YES      |   -0.425 |   -0.415 |
| default  | Mulher | confidence   |  19 | 3.450 |  3.667 | 2.222 | 4.333 | 0.637 | 0.146 | 0.307 | 1.111 | YES      |   -0.392 |   -1.236 |
| stFemale | Homem  | confidence   |  18 | 4.000 |  4.000 | 3.333 | 4.778 | 0.407 | 0.096 | 0.202 | 0.639 | YES      |    0.265 |   -1.065 |
| stFemale | Mulher | confidence   |  25 | 3.449 |  3.667 | 2.111 | 4.778 | 0.769 | 0.154 | 0.318 | 1.111 | YES      |   -0.189 |   -1.195 |
| stMale   | Homem  | confidence   |  25 | 3.667 |  3.667 | 2.778 | 4.667 | 0.417 | 0.083 | 0.172 | 0.444 | YES      |    0.059 |   -0.074 |
| stMale   | Mulher | confidence   |  14 | 3.556 |  3.389 | 2.222 | 5.000 | 0.729 | 0.195 | 0.421 | 0.694 | YES      |    0.279 |   -0.640 |
| NA       | NA     | confidence   | 122 | 3.597 |  3.667 | 2.111 | 5.000 | 0.601 | 0.054 | 0.108 | 0.778 | YES      |   -0.345 |   -0.140 |
| default  | Homem  | satisfaction |  21 | 3.810 |  3.833 | 2.667 | 4.833 | 0.563 | 0.123 | 0.256 | 0.667 | YES      |   -0.186 |   -0.740 |
| default  | Mulher | satisfaction |  19 | 4.096 |  4.000 | 2.000 | 5.000 | 0.710 | 0.163 | 0.342 | 0.833 | NO       |   -1.153 |    1.543 |
| stFemale | Homem  | satisfaction |  18 | 4.009 |  4.083 | 2.500 | 4.833 | 0.704 | 0.166 | 0.350 | 1.083 | NO       |   -0.564 |   -0.901 |
| stFemale | Mulher | satisfaction |  25 | 3.793 |  4.000 | 2.000 | 5.000 | 0.913 | 0.183 | 0.377 | 1.500 | NO       |   -0.565 |   -0.977 |
| stMale   | Homem  | satisfaction |  25 | 3.528 |  3.500 | 2.000 | 4.833 | 0.783 | 0.157 | 0.323 | 1.500 | YES      |   -0.079 |   -1.034 |
| stMale   | Mulher | satisfaction |  14 | 3.702 |  3.917 | 1.500 | 5.000 | 1.040 | 0.278 | 0.601 | 0.750 | NO       |   -1.101 |    0.139 |
| NA       | NA     | satisfaction | 122 | 3.810 |  3.917 | 1.500 | 5.000 | 0.798 | 0.072 | 0.143 | 1.125 | NO       |   -0.748 |    0.100 |
| default  | Homem  | motivation   |  21 | 3.590 |  3.549 | 2.851 | 4.396 | 0.430 | 0.094 | 0.196 | 0.590 | YES      |    0.100 |   -0.998 |
| default  | Mulher | motivation   |  19 | 3.651 |  3.715 | 2.125 | 4.708 | 0.612 | 0.140 | 0.295 | 0.674 | YES      |   -0.495 |    0.043 |
| stFemale | Homem  | motivation   |  18 | 3.914 |  3.962 | 2.931 | 4.674 | 0.490 | 0.115 | 0.243 | 0.587 | YES      |   -0.248 |   -0.821 |
| stFemale | Mulher | motivation   |  25 | 3.574 |  3.681 | 2.062 | 4.646 | 0.729 | 0.146 | 0.301 | 1.090 | YES      |   -0.355 |   -1.092 |
| stMale   | Homem  | motivation   |  25 | 3.382 |  3.312 | 2.465 | 4.132 | 0.507 | 0.101 | 0.209 | 0.747 | YES      |    0.075 |   -1.261 |
| stMale   | Mulher | motivation   |  14 | 3.525 |  3.431 | 2.076 | 5.000 | 0.735 | 0.197 | 0.425 | 0.489 | YES      |   -0.043 |   -0.220 |
| NA       | NA     | motivation   | 122 | 3.594 |  3.576 | 2.062 | 5.000 | 0.600 | 0.054 | 0.108 | 0.763 | YES      |   -0.254 |   -0.265 |

![](anova_files/figure-gfm/unnamed-chunk-5-1.png)<!-- -->![](anova_files/figure-gfm/unnamed-chunk-5-2.png)<!-- -->

    ## [1] "P83"  "P108" "P23"  "P77"

![](anova_files/figure-gfm/unnamed-chunk-5-3.png)<!-- -->

    ## [1] "P92"

![](anova_files/figure-gfm/unnamed-chunk-5-4.png)<!-- -->

    ## [1] "P119" "P79"  "P108"

![](anova_files/figure-gfm/unnamed-chunk-5-5.png)<!-- -->

    ## [1] "P119" "P79"  "P108" "P77"

## Checking of Assumptions

### Assumption: Symmetry and treatment of outliers

#### Applying transformation for skewness data when normality is not achieved

Applying transformation in “satisfaction” to reduce skewness

``` r
density.plot.by.residual(rdat[["satisfaction"]],"satisfaction",between)
```

![](anova_files/figure-gfm/unnamed-chunk-6-1.png)<!-- -->

``` r
rdat[["satisfaction"]][["satisfaction"]] <- sqrt(max(dat[["satisfaction"]][["satisfaction"]]+1) - dat[["satisfaction"]][["satisfaction"]])
density.plot.by.residual(rdat[["satisfaction"]],"satisfaction",between)
```

![](anova_files/figure-gfm/unnamed-chunk-6-2.png)<!-- -->

#### Dealing with outliers (performing treatment of outliers)

``` r
rdat[["attention"]] <- winzorize(rdat[["attention"]],"attention", c("testType","gender"))
rdat[["relevance"]] <- winzorize(rdat[["relevance"]],"relevance", c("testType","gender"))
rdat[["confidence"]] <- winzorize(rdat[["confidence"]],"confidence", c("testType","gender"))
rdat[["satisfaction"]] <- winzorize(rdat[["satisfaction"]],"satisfaction", c("testType","gender"))
rdat[["motivation"]] <- winzorize(rdat[["motivation"]],"motivation", c("testType","gender"))
```

### Assumption: Normality distribution of data

#### Removing data that affect normality (extreme values)

``` r
non.normal <- list(
"confidence" = c("P101","P96"),
"satisfaction" = c("P37","P67"),
"motivation" = c("P66")
)
sdat <- removeFromDataTable(rdat, non.normal, wid)
```

#### Result of normality test in the residual model

|              | var          |   n | skewness | kurtosis | symmetry | statistic | method     |     p | p.signif | normality |
|:-------------|:-------------|----:|---------:|---------:|:---------|----------:|:-----------|------:|:---------|:----------|
| attention    | attention    | 122 |   -0.153 |   -0.831 | YES      |     7.883 | D’Agostino | 0.019 | ns       | QQ        |
| relevance    | relevance    | 122 |    0.141 |   -0.557 | YES      |     2.194 | D’Agostino | 0.334 | ns       | QQ        |
| confidence   | confidence   | 120 |   -0.177 |   -0.688 | YES      |     4.283 | D’Agostino | 0.118 | ns       | QQ        |
| satisfaction | satisfaction | 120 |    0.231 |   -0.795 | YES      |     7.270 | D’Agostino | 0.026 | ns       | QQ        |
| motivation   | motivation   | 121 |   -0.088 |   -0.862 | YES      |     8.563 | D’Agostino | 0.014 | ns       | QQ        |

#### Result of normality test in each group

This is an optional validation and only valid for groups with number
greater than 30 observations

| testType | gender | variable     |   n |  mean | median |   min |   max |    sd |    se |    ci |   iqr | normality | method       | statistic |     p | p.signif |
|:---------|:-------|:-------------|----:|------:|-------:|------:|------:|------:|------:|------:|------:|:----------|:-------------|----------:|------:|:---------|
| default  | Homem  | attention    |  21 | 3.774 |  3.750 | 2.917 | 4.750 | 0.560 | 0.122 | 0.255 | 0.833 | YES       | Shapiro-Wilk |     0.951 | 0.354 | ns       |
| default  | Mulher | attention    |  19 | 3.852 |  3.917 | 2.587 | 4.758 | 0.715 | 0.164 | 0.345 | 1.042 | YES       | Shapiro-Wilk |     0.915 | 0.093 | ns       |
| stFemale | Homem  | attention    |  18 | 4.020 |  4.000 | 3.333 | 4.829 | 0.467 | 0.110 | 0.232 | 0.521 | YES       | Shapiro-Wilk |     0.943 | 0.325 | ns       |
| stFemale | Mulher | attention    |  25 | 3.694 |  3.667 | 2.587 | 4.797 | 0.732 | 0.146 | 0.302 | 1.326 | YES       | Shapiro-Wilk |     0.935 | 0.112 | ns       |
| stMale   | Homem  | attention    |  25 | 3.449 |  3.500 | 2.750 | 4.067 | 0.439 | 0.088 | 0.181 | 0.750 | YES       | Shapiro-Wilk |     0.927 | 0.075 | ns       |
| stMale   | Mulher | attention    |  14 | 3.676 |  3.708 | 2.639 | 4.615 | 0.658 | 0.176 | 0.380 | 1.055 | YES       | Shapiro-Wilk |     0.945 | 0.483 | ns       |
| default  | Homem  | relevance    |  21 | 3.273 |  3.222 | 2.556 | 4.111 | 0.451 | 0.098 | 0.205 | 0.556 | YES       | Shapiro-Wilk |     0.961 | 0.539 | ns       |
| default  | Mulher | relevance    |  19 | 3.245 |  3.000 | 2.211 | 4.556 | 0.698 | 0.160 | 0.337 | 0.833 | YES       | Shapiro-Wilk |     0.952 | 0.429 | ns       |
| stFemale | Homem  | relevance    |  18 | 3.609 |  3.722 | 2.190 | 4.556 | 0.692 | 0.163 | 0.344 | 0.722 | YES       | Shapiro-Wilk |     0.919 | 0.125 | ns       |
| stFemale | Mulher | relevance    |  25 | 3.381 |  3.333 | 2.244 | 4.544 | 0.717 | 0.143 | 0.296 | 1.111 | YES       | Shapiro-Wilk |     0.953 | 0.297 | ns       |
| stMale   | Homem  | relevance    |  25 | 2.910 |  3.000 | 2.006 | 4.244 | 0.710 | 0.142 | 0.293 | 1.222 | YES       | Shapiro-Wilk |     0.932 | 0.096 | ns       |
| stMale   | Mulher | relevance    |  14 | 3.167 |  3.056 | 2.164 | 4.483 | 0.680 | 0.182 | 0.392 | 0.611 | YES       | Shapiro-Wilk |     0.926 | 0.268 | ns       |
| default  | Homem  | confidence   |  21 | 3.503 |  3.556 | 2.778 | 4.000 | 0.394 | 0.086 | 0.179 | 0.653 | YES       | Shapiro-Wilk |     0.929 | 0.132 | ns       |
| default  | Mulher | confidence   |  19 | 3.457 |  3.667 | 2.444 | 4.233 | 0.607 | 0.139 | 0.293 | 1.111 | YES       | Shapiro-Wilk |     0.906 | 0.061 | ns       |
| stFemale | Homem  | confidence   |  17 | 3.952 |  4.000 | 3.522 | 4.444 | 0.327 | 0.079 | 0.168 | 0.556 | YES       | Shapiro-Wilk |     0.896 | 0.059 | ns       |
| stFemale | Mulher | confidence   |  24 | 3.509 |  3.667 | 2.444 | 4.444 | 0.679 | 0.139 | 0.287 | 0.944 | YES       | Shapiro-Wilk |     0.924 | 0.073 | ns       |
| stMale   | Homem  | confidence   |  25 | 3.660 |  3.667 | 3.022 | 4.222 | 0.358 | 0.072 | 0.148 | 0.444 | YES       | Shapiro-Wilk |     0.958 | 0.373 | ns       |
| stMale   | Mulher | confidence   |  14 | 3.544 |  3.389 | 2.733 | 4.444 | 0.575 | 0.154 | 0.332 | 0.694 | YES       | Shapiro-Wilk |     0.922 | 0.234 | ns       |
| default  | Homem  | satisfaction |  21 | 1.473 |  1.472 | 1.225 | 1.780 | 0.176 | 0.038 | 0.080 | 0.227 | YES       | Shapiro-Wilk |     0.943 | 0.255 | ns       |
| default  | Mulher | satisfaction |  19 | 1.348 |  1.414 | 1.080 | 1.710 | 0.202 | 0.046 | 0.097 | 0.317 | YES       | Shapiro-Wilk |     0.917 | 0.101 | ns       |
| stFemale | Homem  | satisfaction |  18 | 1.387 |  1.384 | 1.080 | 1.793 | 0.236 | 0.056 | 0.117 | 0.396 | YES       | Shapiro-Wilk |     0.923 | 0.145 | ns       |
| stFemale | Mulher | satisfaction |  24 | 1.473 |  1.414 | 1.080 | 1.956 | 0.289 | 0.059 | 0.122 | 0.439 | YES       | Shapiro-Wilk |     0.922 | 0.064 | ns       |
| stMale   | Homem  | satisfaction |  24 | 1.568 |  1.581 | 1.169 | 1.906 | 0.232 | 0.047 | 0.098 | 0.353 | YES       | Shapiro-Wilk |     0.917 | 0.051 | ns       |
| stMale   | Mulher | satisfaction |  14 | 1.470 |  1.443 | 1.129 | 1.956 | 0.257 | 0.069 | 0.148 | 0.261 | YES       | Shapiro-Wilk |     0.922 | 0.238 | ns       |
| default  | Homem  | motivation   |  21 | 3.586 |  3.549 | 2.917 | 4.250 | 0.412 | 0.090 | 0.188 | 0.590 | YES       | Shapiro-Wilk |     0.960 | 0.509 | ns       |
| default  | Mulher | motivation   |  19 | 3.682 |  3.715 | 2.905 | 4.521 | 0.505 | 0.116 | 0.243 | 0.674 | YES       | Shapiro-Wilk |     0.957 | 0.507 | ns       |
| stFemale | Homem  | motivation   |  18 | 3.908 |  3.962 | 3.084 | 4.527 | 0.450 | 0.106 | 0.224 | 0.587 | YES       | Shapiro-Wilk |     0.952 | 0.459 | ns       |
| stFemale | Mulher | motivation   |  24 | 3.552 |  3.622 | 2.551 | 4.512 | 0.666 | 0.136 | 0.281 | 0.990 | YES       | Shapiro-Wilk |     0.922 | 0.064 | ns       |
| stMale   | Homem  | motivation   |  25 | 3.390 |  3.312 | 2.643 | 4.118 | 0.491 | 0.098 | 0.203 | 0.747 | YES       | Shapiro-Wilk |     0.926 | 0.071 | ns       |
| stMale   | Mulher | motivation   |  14 | 3.529 |  3.431 | 2.551 | 4.446 | 0.575 | 0.154 | 0.332 | 0.489 | YES       | Shapiro-Wilk |     0.924 | 0.248 | ns       |

**Observation**:

As sample sizes increase, parametric tests remain valid even with the
violation of normality \[[1](#references)\]. According to the central
limit theorem, the sampling distribution tends to be normal if the
sample is large, more than (`n > 30`) observations. Therefore, we
performed parametric tests with large samples as described as follows:

-   In cases with the sample size greater than 100 (`n > 100`), we
    adopted a significance level of `p < 0.01`

-   For samples with `n > 50` observation, we adopted D’Agostino-Pearson
    test that offers better accuracy for larger samples
    \[[2](#references)\].

-   For samples’ size between `n > 100` and `n <= 200`, we ignored the
    normality test, and our decision of validating normality was based
    only in the interpretation of QQ-plots and histograms because the
    Shapiro-Wilk and D’Agostino-Pearson tests tend to be too sensitive
    with values greater than 200 observation \[[3](#references)\].

-   For samples with `n > 200` observation, we ignore the normality
    assumption based on the central theorem limit.

### Assumption: Homogeneity of data distribution

|              | var          | method        | formula                              |   n | df1 | df2 | statistic |     p | p.signif |
|:-------------|:-------------|:--------------|:-------------------------------------|----:|----:|----:|----------:|------:|:---------|
| attention    | attention    | Levene’s test | `attention`\~`testType`\*`gender`    | 122 |   5 | 116 |     2.062 | 0.075 | ns       |
| relevance    | relevance    | Levene’s test | `relevance`\~`testType`\*`gender`    | 122 |   5 | 116 |     1.032 | 0.402 | ns       |
| confidence   | confidence   | Levene’s test | `confidence`\~`testType`\*`gender`   | 120 |   5 | 114 |     3.610 | 0.005 | \*       |
| satisfaction | satisfaction | Levene’s test | `satisfaction`\~`testType`\*`gender` | 120 |   5 | 114 |     1.287 | 0.275 | ns       |
| motivation   | motivation   | Levene’s test | `motivation`\~`testType`\*`gender`   | 121 |   5 | 115 |     1.770 | 0.124 | ns       |

## Saving the Data with Normal Distribution Used for Performing ANOVA test

``` r
ndat <- sdat[[1]]
for (dv in names(sdat)[-1]) ndat <- merge(ndat, sdat[[dv]])
write.csv(ndat, paste0("../data/table-with-normal-distribution.csv"))
```

Descriptive statistics of data with normal distribution

|                | testType | gender | variable     |   n |  mean | median |   min |   max |    sd |    se |    ci |   iqr |
|:---------------|:---------|:-------|:-------------|----:|------:|-------:|------:|------:|------:|------:|------:|------:|
| attention.1    | default  | Homem  | attention    |  21 | 3.774 |  3.750 | 2.917 | 4.750 | 0.560 | 0.122 | 0.255 | 0.833 |
| attention.2    | default  | Mulher | attention    |  19 | 3.852 |  3.917 | 2.587 | 4.758 | 0.715 | 0.164 | 0.345 | 1.042 |
| attention.3    | stFemale | Homem  | attention    |  18 | 4.020 |  4.000 | 3.333 | 4.829 | 0.467 | 0.110 | 0.232 | 0.521 |
| attention.4    | stFemale | Mulher | attention    |  25 | 3.694 |  3.667 | 2.587 | 4.797 | 0.732 | 0.146 | 0.302 | 1.326 |
| attention.5    | stMale   | Homem  | attention    |  25 | 3.449 |  3.500 | 2.750 | 4.067 | 0.439 | 0.088 | 0.181 | 0.750 |
| attention.6    | stMale   | Mulher | attention    |  14 | 3.676 |  3.708 | 2.639 | 4.615 | 0.658 | 0.176 | 0.380 | 1.055 |
| relevance.1    | default  | Homem  | relevance    |  21 | 3.273 |  3.222 | 2.556 | 4.111 | 0.451 | 0.098 | 0.205 | 0.556 |
| relevance.2    | default  | Mulher | relevance    |  19 | 3.245 |  3.000 | 2.211 | 4.556 | 0.698 | 0.160 | 0.337 | 0.833 |
| relevance.3    | stFemale | Homem  | relevance    |  18 | 3.609 |  3.722 | 2.190 | 4.556 | 0.692 | 0.163 | 0.344 | 0.722 |
| relevance.4    | stFemale | Mulher | relevance    |  25 | 3.381 |  3.333 | 2.244 | 4.544 | 0.717 | 0.143 | 0.296 | 1.111 |
| relevance.5    | stMale   | Homem  | relevance    |  25 | 2.910 |  3.000 | 2.006 | 4.244 | 0.710 | 0.142 | 0.293 | 1.222 |
| relevance.6    | stMale   | Mulher | relevance    |  14 | 3.167 |  3.056 | 2.164 | 4.483 | 0.680 | 0.182 | 0.392 | 0.611 |
| confidence.1   | default  | Homem  | confidence   |  21 | 3.503 |  3.556 | 2.778 | 4.000 | 0.394 | 0.086 | 0.179 | 0.653 |
| confidence.2   | default  | Mulher | confidence   |  19 | 3.457 |  3.667 | 2.444 | 4.233 | 0.607 | 0.139 | 0.293 | 1.111 |
| confidence.3   | stFemale | Homem  | confidence   |  17 | 3.952 |  4.000 | 3.522 | 4.444 | 0.327 | 0.079 | 0.168 | 0.556 |
| confidence.4   | stFemale | Mulher | confidence   |  24 | 3.509 |  3.667 | 2.444 | 4.444 | 0.679 | 0.139 | 0.287 | 0.944 |
| confidence.5   | stMale   | Homem  | confidence   |  25 | 3.660 |  3.667 | 3.022 | 4.222 | 0.358 | 0.072 | 0.148 | 0.444 |
| confidence.6   | stMale   | Mulher | confidence   |  14 | 3.544 |  3.389 | 2.733 | 4.444 | 0.575 | 0.154 | 0.332 | 0.694 |
| satisfaction.1 | default  | Homem  | satisfaction |  21 | 1.473 |  1.472 | 1.225 | 1.780 | 0.176 | 0.038 | 0.080 | 0.227 |
| satisfaction.2 | default  | Mulher | satisfaction |  19 | 1.348 |  1.414 | 1.080 | 1.710 | 0.202 | 0.046 | 0.097 | 0.317 |
| satisfaction.3 | stFemale | Homem  | satisfaction |  18 | 1.387 |  1.384 | 1.080 | 1.793 | 0.236 | 0.056 | 0.117 | 0.396 |
| satisfaction.4 | stFemale | Mulher | satisfaction |  24 | 1.473 |  1.414 | 1.080 | 1.956 | 0.289 | 0.059 | 0.122 | 0.439 |
| satisfaction.5 | stMale   | Homem  | satisfaction |  24 | 1.568 |  1.581 | 1.169 | 1.906 | 0.232 | 0.047 | 0.098 | 0.353 |
| satisfaction.6 | stMale   | Mulher | satisfaction |  14 | 1.470 |  1.443 | 1.129 | 1.956 | 0.257 | 0.069 | 0.148 | 0.261 |
| motivation.1   | default  | Homem  | motivation   |  21 | 3.586 |  3.549 | 2.917 | 4.250 | 0.412 | 0.090 | 0.188 | 0.590 |
| motivation.2   | default  | Mulher | motivation   |  19 | 3.682 |  3.715 | 2.905 | 4.521 | 0.505 | 0.116 | 0.243 | 0.674 |
| motivation.3   | stFemale | Homem  | motivation   |  18 | 3.908 |  3.962 | 3.084 | 4.527 | 0.450 | 0.106 | 0.224 | 0.587 |
| motivation.4   | stFemale | Mulher | motivation   |  24 | 3.552 |  3.622 | 2.551 | 4.512 | 0.666 | 0.136 | 0.281 | 0.990 |
| motivation.5   | stMale   | Homem  | motivation   |  25 | 3.390 |  3.312 | 2.643 | 4.118 | 0.491 | 0.098 | 0.203 | 0.747 |
| motivation.6   | stMale   | Mulher | motivation   |  14 | 3.529 |  3.431 | 2.551 | 4.446 | 0.575 | 0.154 | 0.332 | 0.489 |

![](anova_files/figure-gfm/unnamed-chunk-18-1.png)<!-- -->![](anova_files/figure-gfm/unnamed-chunk-18-2.png)<!-- -->![](anova_files/figure-gfm/unnamed-chunk-18-3.png)<!-- -->![](anova_files/figure-gfm/unnamed-chunk-18-4.png)<!-- -->![](anova_files/figure-gfm/unnamed-chunk-18-5.png)<!-- -->

## Computation of ANOVA test and Pairwise Comparison

### ANOVA test

| var          | Effect          | DFn | DFd |   SSn |    SSd |     F |     p |   ges | p.signif |
|:-------------|:----------------|----:|----:|------:|-------:|------:|------:|------:|:---------|
| attention    | testType        |   2 | 116 | 2.246 | 42.297 | 3.080 | 0.050 | 0.050 | \*       |
| attention    | gender          |   1 | 116 | 0.012 | 42.297 | 0.034 | 0.855 | 0.000 | ns       |
| attention    | testType:gender |   2 | 116 | 1.624 | 42.297 | 2.227 | 0.112 | 0.037 | ns       |
| relevance    | testType        |   2 | 116 | 4.497 | 51.428 | 5.072 | 0.008 | 0.080 | \*\*     |
| relevance    | gender          |   1 | 116 | 0.004 | 51.428 | 0.010 | 0.920 | 0.000 | ns       |
| relevance    | testType:gender |   2 | 116 | 1.143 | 51.428 | 1.289 | 0.279 | 0.022 | ns       |
| confidence   | testType        |   2 | 114 | 1.102 | 29.412 | 2.137 | 0.123 | 0.036 | ns       |
| confidence   | gender          |   1 | 114 | 1.207 | 29.412 | 4.679 | 0.033 | 0.039 | \*       |
| confidence   | testType:gender |   2 | 114 | 0.887 | 29.412 | 1.718 | 0.184 | 0.029 | ns       |
| satisfaction | testType        |   2 | 114 | 0.272 |  6.306 | 2.455 | 0.090 | 0.041 | ns       |
| satisfaction | gender          |   1 | 114 | 0.052 |  6.306 | 0.940 | 0.334 | 0.008 | ns       |
| satisfaction | testType:gender |   2 | 114 | 0.266 |  6.306 | 2.402 | 0.095 | 0.040 | ns       |
| motivation   | testType        |   2 | 115 | 1.562 | 31.711 | 2.833 | 0.063 | 0.047 | ns       |
| motivation   | gender          |   1 | 115 | 0.073 | 31.711 | 0.263 | 0.609 | 0.002 | ns       |
| motivation   | testType:gender |   2 | 115 | 1.496 | 31.711 | 2.713 | 0.071 | 0.045 | ns       |

### Pairwise comparison

| var          | testType | gender | group1   | group2   | estimate | conf.low | conf.high |    se | statistic |     p | p.adj | p.adj.signif |
|:-------------|:---------|:-------|:---------|:---------|---------:|---------:|----------:|------:|----------:|------:|------:|:-------------|
| attention    | NA       | Homem  | default  | stFemale |   -0.246 |   -0.631 |     0.138 | 0.194 |    -1.270 | 0.207 | 0.620 | ns           |
| attention    | NA       | Homem  | default  | stMale   |    0.325 |   -0.029 |     0.679 | 0.179 |     1.819 | 0.071 | 0.214 | ns           |
| attention    | NA       | Homem  | stFemale | stMale   |    0.571 |    0.202 |     0.941 | 0.187 |     3.062 | 0.003 | 0.008 | \*\*         |
| attention    | NA       | Mulher | default  | stFemale |    0.158 |   -0.206 |     0.522 | 0.184 |     0.859 | 0.392 | 1.000 | ns           |
| attention    | NA       | Mulher | default  | stMale   |    0.176 |   -0.245 |     0.597 | 0.213 |     0.828 | 0.409 | 1.000 | ns           |
| attention    | NA       | Mulher | stFemale | stMale   |    0.018 |   -0.381 |     0.418 | 0.202 |     0.091 | 0.928 | 1.000 | ns           |
| attention    | default  | NA     | Homem    | Mulher   |   -0.078 |   -0.457 |     0.301 | 0.191 |    -0.408 | 0.684 | 0.684 | ns           |
| attention    | stFemale | NA     | Homem    | Mulher   |    0.326 |   -0.043 |     0.696 | 0.187 |     1.748 | 0.083 | 0.083 | ns           |
| attention    | stMale   | NA     | Homem    | Mulher   |   -0.227 |   -0.626 |     0.172 | 0.202 |    -1.126 | 0.263 | 0.263 | ns           |
| relevance    | NA       | Homem  | default  | stFemale |   -0.336 |   -0.760 |     0.087 | 0.214 |    -1.572 | 0.119 | 0.356 | ns           |
| relevance    | NA       | Homem  | default  | stMale   |    0.363 |   -0.027 |     0.753 | 0.197 |     1.842 | 0.068 | 0.204 | ns           |
| relevance    | NA       | Homem  | stFemale | stMale   |    0.699 |    0.292 |     1.107 | 0.206 |     3.397 | 0.001 | 0.003 | \*\*         |
| relevance    | NA       | Mulher | default  | stFemale |   -0.136 |   -0.537 |     0.266 | 0.203 |    -0.670 | 0.504 | 1.000 | ns           |
| relevance    | NA       | Mulher | default  | stMale   |    0.078 |   -0.387 |     0.542 | 0.235 |     0.331 | 0.741 | 1.000 | ns           |
| relevance    | NA       | Mulher | stFemale | stMale   |    0.214 |   -0.227 |     0.654 | 0.222 |     0.961 | 0.339 | 1.000 | ns           |
| relevance    | default  | NA     | Homem    | Mulher   |    0.028 |   -0.389 |     0.446 | 0.211 |     0.133 | 0.894 | 0.894 | ns           |
| relevance    | stFemale | NA     | Homem    | Mulher   |    0.228 |   -0.179 |     0.636 | 0.206 |     1.110 | 0.269 | 0.269 | ns           |
| relevance    | stMale   | NA     | Homem    | Mulher   |   -0.257 |   -0.697 |     0.183 | 0.222 |    -1.157 | 0.250 | 0.250 | ns           |
| confidence   | NA       | Homem  | default  | stFemale |   -0.449 |   -0.777 |    -0.121 | 0.166 |    -2.709 | 0.008 | 0.023 | \*           |
| confidence   | NA       | Homem  | default  | stMale   |   -0.156 |   -0.454 |     0.142 | 0.150 |    -1.039 | 0.301 | 0.903 | ns           |
| confidence   | NA       | Homem  | stFemale | stMale   |    0.293 |   -0.024 |     0.609 | 0.160 |     1.833 | 0.069 | 0.208 | ns           |
| confidence   | NA       | Mulher | default  | stFemale |   -0.053 |   -0.362 |     0.256 | 0.156 |    -0.337 | 0.737 | 1.000 | ns           |
| confidence   | NA       | Mulher | default  | stMale   |   -0.088 |   -0.442 |     0.267 | 0.179 |    -0.490 | 0.625 | 1.000 | ns           |
| confidence   | NA       | Mulher | stFemale | stMale   |   -0.035 |   -0.374 |     0.303 | 0.171 |    -0.206 | 0.837 | 1.000 | ns           |
| confidence   | default  | NA     | Homem    | Mulher   |    0.047 |   -0.272 |     0.365 | 0.161 |     0.290 | 0.773 | 0.773 | ns           |
| confidence   | stFemale | NA     | Homem    | Mulher   |    0.443 |    0.124 |     0.762 | 0.161 |     2.751 | 0.007 | 0.007 | \*\*         |
| confidence   | stMale   | NA     | Homem    | Mulher   |    0.115 |   -0.221 |     0.451 | 0.170 |     0.679 | 0.499 | 0.499 | ns           |
| satisfaction | NA       | Homem  | default  | stFemale |    0.086 |   -0.063 |     0.236 | 0.076 |     1.141 | 0.256 | 0.769 | ns           |
| satisfaction | NA       | Homem  | default  | stMale   |   -0.095 |   -0.235 |     0.044 | 0.070 |    -1.359 | 0.177 | 0.531 | ns           |
| satisfaction | NA       | Homem  | stFemale | stMale   |   -0.182 |   -0.327 |    -0.036 | 0.073 |    -2.478 | 0.015 | 0.044 | \*           |
| satisfaction | NA       | Mulher | default  | stFemale |   -0.125 |   -0.268 |     0.018 | 0.072 |    -1.727 | 0.087 | 0.260 | ns           |
| satisfaction | NA       | Mulher | default  | stMale   |   -0.122 |   -0.286 |     0.043 | 0.083 |    -1.467 | 0.145 | 0.435 | ns           |
| satisfaction | NA       | Mulher | stFemale | stMale   |    0.003 |   -0.153 |     0.160 | 0.079 |     0.040 | 0.968 | 1.000 | ns           |
| satisfaction | default  | NA     | Homem    | Mulher   |    0.125 |   -0.023 |     0.272 | 0.074 |     1.675 | 0.097 | 0.097 | ns           |
| satisfaction | stFemale | NA     | Homem    | Mulher   |   -0.086 |   -0.231 |     0.059 | 0.073 |    -1.175 | 0.242 | 0.242 | ns           |
| satisfaction | stMale   | NA     | Homem    | Mulher   |    0.099 |   -0.058 |     0.255 | 0.079 |     1.248 | 0.215 | 0.215 | ns           |
| motivation   | NA       | Homem  | default  | stFemale |   -0.321 |   -0.655 |     0.013 | 0.169 |    -1.905 | 0.059 | 0.178 | ns           |
| motivation   | NA       | Homem  | default  | stMale   |    0.196 |   -0.112 |     0.504 | 0.155 |     1.262 | 0.209 | 0.628 | ns           |
| motivation   | NA       | Homem  | stFemale | stMale   |    0.518 |    0.196 |     0.839 | 0.162 |     3.188 | 0.002 | 0.006 | \*\*         |
| motivation   | NA       | Mulher | default  | stFemale |    0.131 |   -0.189 |     0.450 | 0.161 |     0.810 | 0.420 | 1.000 | ns           |
| motivation   | NA       | Mulher | default  | stMale   |    0.153 |   -0.213 |     0.520 | 0.185 |     0.829 | 0.409 | 1.000 | ns           |
| motivation   | NA       | Mulher | stFemale | stMale   |    0.023 |   -0.327 |     0.372 | 0.177 |     0.128 | 0.898 | 1.000 | ns           |
| motivation   | default  | NA     | Homem    | Mulher   |   -0.096 |   -0.425 |     0.233 | 0.166 |    -0.578 | 0.565 | 0.565 | ns           |
| motivation   | stFemale | NA     | Homem    | Mulher   |    0.356 |    0.032 |     0.680 | 0.164 |     2.174 | 0.032 | 0.032 | \*           |
| motivation   | stMale   | NA     | Homem    | Mulher   |   -0.139 |   -0.486 |     0.208 | 0.175 |    -0.793 | 0.430 | 0.430 | ns           |

### Descriptive Statistic of Estimated Marginal Means

| var          | testType | gender |   n | emmean |  mean | conf.low | conf.high |    sd | sd.emms | se.emms |
|:-------------|:---------|:-------|----:|-------:|------:|---------:|----------:|------:|--------:|--------:|
| attention    | default  | Homem  |  21 |  3.774 | 3.774 |    3.513 |     4.035 | 0.560 |   0.604 |   0.132 |
| attention    | default  | Mulher |  19 |  3.852 | 3.852 |    3.577 |     4.126 | 0.715 |   0.604 |   0.139 |
| attention    | stFemale | Homem  |  18 |  4.020 | 4.020 |    3.738 |     4.302 | 0.467 |   0.604 |   0.142 |
| attention    | stFemale | Mulher |  25 |  3.694 | 3.694 |    3.455 |     3.933 | 0.732 |   0.604 |   0.121 |
| attention    | stMale   | Homem  |  25 |  3.449 | 3.449 |    3.209 |     3.688 | 0.439 |   0.604 |   0.121 |
| attention    | stMale   | Mulher |  14 |  3.676 | 3.676 |    3.356 |     3.995 | 0.658 |   0.604 |   0.161 |
| confidence   | default  | Homem  |  21 |  3.503 | 3.503 |    3.284 |     3.723 | 0.394 |   0.508 |   0.111 |
| confidence   | default  | Mulher |  19 |  3.457 | 3.457 |    3.226 |     3.688 | 0.607 |   0.508 |   0.117 |
| confidence   | stFemale | Homem  |  17 |  3.952 | 3.952 |    3.708 |     4.196 | 0.327 |   0.508 |   0.123 |
| confidence   | stFemale | Mulher |  24 |  3.509 | 3.509 |    3.304 |     3.715 | 0.679 |   0.508 |   0.104 |
| confidence   | stMale   | Homem  |  25 |  3.660 | 3.660 |    3.458 |     3.861 | 0.358 |   0.508 |   0.102 |
| confidence   | stMale   | Mulher |  14 |  3.544 | 3.544 |    3.276 |     3.813 | 0.575 |   0.508 |   0.136 |
| motivation   | default  | Homem  |  21 |  3.586 | 3.586 |    3.359 |     3.813 | 0.412 |   0.525 |   0.115 |
| motivation   | default  | Mulher |  19 |  3.682 | 3.682 |    3.444 |     3.921 | 0.505 |   0.525 |   0.120 |
| motivation   | stFemale | Homem  |  18 |  3.908 | 3.908 |    3.662 |     4.153 | 0.450 |   0.525 |   0.124 |
| motivation   | stFemale | Mulher |  24 |  3.552 | 3.552 |    3.339 |     3.764 | 0.666 |   0.525 |   0.107 |
| motivation   | stMale   | Homem  |  25 |  3.390 | 3.390 |    3.182 |     3.598 | 0.491 |   0.525 |   0.105 |
| motivation   | stMale   | Mulher |  14 |  3.529 | 3.529 |    3.251 |     3.807 | 0.575 |   0.525 |   0.140 |
| relevance    | default  | Homem  |  21 |  3.273 | 3.273 |    2.985 |     3.561 | 0.451 |   0.666 |   0.145 |
| relevance    | default  | Mulher |  19 |  3.245 | 3.245 |    2.942 |     3.548 | 0.698 |   0.666 |   0.153 |
| relevance    | stFemale | Homem  |  18 |  3.609 | 3.609 |    3.298 |     3.920 | 0.692 |   0.666 |   0.157 |
| relevance    | stFemale | Mulher |  25 |  3.381 | 3.381 |    3.117 |     3.645 | 0.717 |   0.666 |   0.133 |
| relevance    | stMale   | Homem  |  25 |  2.910 | 2.910 |    2.646 |     3.174 | 0.710 |   0.666 |   0.133 |
| relevance    | stMale   | Mulher |  14 |  3.167 | 3.167 |    2.815 |     3.520 | 0.680 |   0.666 |   0.178 |
| satisfaction | default  | Homem  |  21 |  1.473 | 1.473 |    1.371 |     1.574 | 0.176 |   0.235 |   0.051 |
| satisfaction | default  | Mulher |  19 |  1.348 | 1.348 |    1.241 |     1.455 | 0.202 |   0.235 |   0.054 |
| satisfaction | stFemale | Homem  |  18 |  1.387 | 1.387 |    1.277 |     1.496 | 0.236 |   0.235 |   0.055 |
| satisfaction | stFemale | Mulher |  24 |  1.473 | 1.473 |    1.378 |     1.568 | 0.289 |   0.235 |   0.048 |
| satisfaction | stMale   | Homem  |  24 |  1.568 | 1.568 |    1.473 |     1.663 | 0.232 |   0.235 |   0.048 |
| satisfaction | stMale   | Mulher |  14 |  1.470 | 1.470 |    1.345 |     1.594 | 0.257 |   0.235 |   0.063 |

### Anova plots for the dependent variable “attention”

``` r
plots <- twoWayAnovaPlots(sdat[["attention"]], "attention", between, aov[["attention"]], pwc[["attention"]], c("jitter"), font.label.size=14, step.increase=0.25)
```

#### Plot of “attention” based on “testType” (color: gender)

``` r
plots[["testType"]]
```

![](anova_files/figure-gfm/unnamed-chunk-26-1.png)<!-- -->

#### Plot of “attention” based on “gender” (color: testType)

``` r
plots[["gender"]]
```

![](anova_files/figure-gfm/unnamed-chunk-27-1.png)<!-- -->

### Anova plots for the dependent variable “relevance”

``` r
plots <- twoWayAnovaPlots(sdat[["relevance"]], "relevance", between, aov[["relevance"]], pwc[["relevance"]], c("jitter"), font.label.size=14, step.increase=0.25)
```

#### Plot of “relevance” based on “testType” (color: gender)

``` r
plots[["testType"]]
```

![](anova_files/figure-gfm/unnamed-chunk-29-1.png)<!-- -->

#### Plot of “relevance” based on “gender” (color: testType)

``` r
plots[["gender"]]
```

![](anova_files/figure-gfm/unnamed-chunk-30-1.png)<!-- -->

### Anova plots for the dependent variable “confidence”

``` r
plots <- twoWayAnovaPlots(sdat[["confidence"]], "confidence", between, aov[["confidence"]], pwc[["confidence"]], c("jitter"), font.label.size=14, step.increase=0.25)
```

#### Plot of “confidence” based on “testType” (color: gender)

``` r
plots[["testType"]]
```

![](anova_files/figure-gfm/unnamed-chunk-32-1.png)<!-- -->

#### Plot of “confidence” based on “gender” (color: testType)

``` r
plots[["gender"]]
```

![](anova_files/figure-gfm/unnamed-chunk-33-1.png)<!-- -->

### Anova plots for the dependent variable “satisfaction”

``` r
plots <- twoWayAnovaPlots(sdat[["satisfaction"]], "satisfaction", between, aov[["satisfaction"]], pwc[["satisfaction"]], c("jitter"), font.label.size=14, step.increase=0.25)
```

#### Plot of “satisfaction” based on “testType” (color: gender)

``` r
plots[["testType"]]
```

![](anova_files/figure-gfm/unnamed-chunk-35-1.png)<!-- -->

#### Plot of “satisfaction” based on “gender” (color: testType)

``` r
plots[["gender"]]
```

![](anova_files/figure-gfm/unnamed-chunk-36-1.png)<!-- -->

### Anova plots for the dependent variable “motivation”

``` r
plots <- twoWayAnovaPlots(sdat[["motivation"]], "motivation", between, aov[["motivation"]], pwc[["motivation"]], c("jitter"), font.label.size=14, step.increase=0.25)
```

#### Plot of “motivation” based on “testType” (color: gender)

``` r
plots[["testType"]]
```

![](anova_files/figure-gfm/unnamed-chunk-38-1.png)<!-- -->

#### Plot of “motivation” based on “gender” (color: testType)

``` r
plots[["gender"]]
```

![](anova_files/figure-gfm/unnamed-chunk-39-1.png)<!-- -->

### Textual Report

ANOVA tests with independent between-subjects variables “testType”
(default, stFemale, stMale) and “gender” (Homem, Mulher) were performed
to determine statistically significant difference on the dependent
varibles “attention”, “relevance”, “confidence”, “satisfaction”,
“motivation”. For the dependent variable “attention”, there was not
statistically significant effects. For the dependent variable
“relevance”, there was statistically significant effects in the factor
“testType” with F(2,116)=5.072, p=0.008 and ges=0.08 (effect size). For
the dependent variable “confidence”, there was statistically significant
effects in the factor “gender” with F(1,114)=4.679, p=0.033 and
ges=0.039 (effect size). For the dependent variable “satisfaction”,
there was not statistically significant effects. For the dependent
variable “motivation”, there was not statistically significant effects.

Pairwise comparisons using the Estimated Marginal Means (EMMs) were
computed to find statistically significant diferences among the groups
defined by the independent variables, and with the p-values ajusted by
the method “bonferroni”. For the dependent variable “motivation”, the
mean in the testType=“stFemale” (adj M=4.02 and SD=0.467) was
significantly different than the mean in the testType=“stMale” (adj
M=3.449 and SD=0.439) with p-adj=0.008; the mean in the
testType=“stFemale” (adj M=3.609 and SD=0.692) was significantly
different than the mean in the testType=“stMale” (adj M=2.91 and
SD=0.71) with p-adj=0.003; the mean in the testType=“default” (adj
M=3.503 and SD=0.394) was significantly different than the mean in the
testType=“stFemale” (adj M=3.952 and SD=0.327) with p-adj=0.023; the
mean in the gender=“Homem” (adj M=3.952 and SD=0.327) was significantly
different than the mean in the gender=“Mulher” (adj M=3.509 and
SD=0.679) with p-adj=0.007; the mean in the testType=“stFemale” (adj
M=1.387 and SD=0.236) was significantly different than the mean in the
testType=“stMale” (adj M=1.568 and SD=0.232) with p-adj=0.044; the mean
in the testType=“stFemale” (adj M=3.908 and SD=0.45) was significantly
different than the mean in the testType=“stMale” (adj M=3.39 and
SD=0.491) with p-adj=0.006; the mean in the gender=“Homem” (adj M=3.908
and SD=0.45) was significantly different than the mean in the
gender=“Mulher” (adj M=3.552 and SD=0.666) with p-adj=0.032.

## Tips and References

-   Use the site <https://www.tablesgenerator.com> to convert the HTML
    tables into Latex format

-   \[2\]: Miot, H. A. (2017). Assessing normality of data in clinical
    and experimental trials. J Vasc Bras, 16(2), 88-91.

-   \[3\]: Bárány, Imre; Vu, Van (2007). “Central limit theorems for
    Gaussian polytopes”. Annals of Probability. Institute of
    Mathematical Statistics. 35 (4): 1593–1621.