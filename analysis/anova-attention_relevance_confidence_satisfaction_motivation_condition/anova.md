ANOVA test for
`attention,relevance,confidence,satisfaction,motivation`\~`condition`
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

| condition | variable     |   n |  mean | median |   min |   max |    sd |    se |    ci |   iqr | symmetry | skewness | kurtosis |
|:----------|:-------------|----:|------:|-------:|------:|------:|------:|------:|------:|------:|:---------|---------:|---------:|
| control   | attention    |  40 | 3.792 |  3.833 | 1.833 | 5.000 | 0.706 | 0.112 | 0.226 | 0.958 | NO       |   -0.571 |   -0.069 |
| inBoost   | attention    |  50 | 3.554 |  3.583 | 1.917 | 5.000 | 0.681 | 0.096 | 0.193 | 0.831 | YES      |   -0.063 |   -0.252 |
| inThreat  | attention    |  32 | 3.875 |  3.917 | 2.250 | 5.000 | 0.634 | 0.112 | 0.229 | 0.767 | YES      |   -0.331 |   -0.076 |
| NA        | attention    | 122 | 3.716 |  3.750 | 1.833 | 5.000 | 0.686 | 0.062 | 0.123 | 0.917 | YES      |   -0.317 |   -0.173 |
| control   | relevance    |  40 | 3.260 |  3.222 | 2.111 | 4.667 | 0.603 | 0.095 | 0.193 | 0.611 | YES      |    0.336 |   -0.290 |
| inBoost   | relevance    |  50 | 3.139 |  3.111 | 1.444 | 4.667 | 0.793 | 0.112 | 0.225 | 1.000 | YES      |    0.079 |   -0.770 |
| inThreat  | relevance    |  32 | 3.420 |  3.389 | 1.667 | 5.000 | 0.812 | 0.143 | 0.293 | 0.917 | YES      |   -0.085 |   -0.443 |
| NA        | relevance    | 122 | 3.253 |  3.222 | 1.444 | 5.000 | 0.744 | 0.067 | 0.133 | 0.889 | YES      |    0.073 |   -0.376 |
| control   | confidence   |  40 | 3.478 |  3.667 | 2.222 | 4.333 | 0.542 | 0.086 | 0.173 | 0.778 | YES      |   -0.480 |   -0.682 |
| inBoost   | confidence   |  50 | 3.558 |  3.667 | 2.111 | 4.778 | 0.622 | 0.088 | 0.177 | 0.750 | YES      |   -0.441 |   -0.289 |
| inThreat  | confidence   |  32 | 3.806 |  3.667 | 2.222 | 5.000 | 0.603 | 0.107 | 0.218 | 0.833 | YES      |   -0.255 |   -0.088 |
| NA        | confidence   | 122 | 3.597 |  3.667 | 2.111 | 5.000 | 0.601 | 0.054 | 0.108 | 0.778 | YES      |   -0.345 |   -0.140 |
| control   | satisfaction |  40 | 3.946 |  4.000 | 2.000 | 5.000 | 0.645 | 0.102 | 0.206 | 0.833 | NO       |   -0.653 |    0.506 |
| inBoost   | satisfaction |  50 | 3.661 |  3.550 | 2.000 | 5.000 | 0.853 | 0.121 | 0.242 | 1.292 | YES      |   -0.310 |   -1.026 |
| inThreat  | satisfaction |  32 | 3.875 |  4.000 | 1.500 | 5.000 | 0.866 | 0.153 | 0.312 | 1.000 | NO       |   -1.196 |    1.133 |
| NA        | satisfaction | 122 | 3.810 |  3.917 | 1.500 | 5.000 | 0.798 | 0.072 | 0.143 | 1.125 | NO       |   -0.748 |    0.100 |
| control   | motivation   |  40 | 3.619 |  3.576 | 2.125 | 4.708 | 0.518 | 0.082 | 0.166 | 0.632 | YES      |   -0.298 |    0.223 |
| inBoost   | motivation   |  50 | 3.478 |  3.431 | 2.062 | 4.646 | 0.629 | 0.089 | 0.179 | 0.983 | YES      |   -0.104 |   -0.957 |
| inThreat  | motivation   |  32 | 3.744 |  3.771 | 2.076 | 5.000 | 0.630 | 0.111 | 0.227 | 0.751 | YES      |   -0.420 |    0.231 |
| NA        | motivation   | 122 | 3.594 |  3.576 | 2.062 | 5.000 | 0.600 | 0.054 | 0.108 | 0.763 | YES      |   -0.254 |   -0.265 |

![](anova_files/figure-gfm/unnamed-chunk-5-1.png)<!-- -->

    ## [1] "P108"

![](anova_files/figure-gfm/unnamed-chunk-5-2.png)<!-- -->

    ## [1] "P111"

![](anova_files/figure-gfm/unnamed-chunk-5-3.png)<!-- -->![](anova_files/figure-gfm/unnamed-chunk-5-4.png)<!-- -->

    ## [1] "P119" "P79"  "P108"

![](anova_files/figure-gfm/unnamed-chunk-5-5.png)<!-- -->

    ## [1] "P119" "P108"

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
rdat[["attention"]] <- winzorize(rdat[["attention"]],"attention", c("condition"))
rdat[["relevance"]] <- winzorize(rdat[["relevance"]],"relevance", c("condition"))
rdat[["confidence"]] <- winzorize(rdat[["confidence"]],"confidence", c("condition"))
rdat[["satisfaction"]] <- winzorize(rdat[["satisfaction"]],"satisfaction", c("condition"))
rdat[["motivation"]] <- winzorize(rdat[["motivation"]],"motivation", c("condition"))
```

### Assumption: Normality distribution of data

#### Removing data that affect normality (extreme values)

``` r
non.normal <- list(
"attention" = c("P21","P111"),
"relevance" = c("P01"),
"confidence" = c("P96","P92","P124","P28","P97","P111"),
"satisfaction" = c("P67","P84","P117","P124"),
"motivation" = c("P66","P78","P90","P117")
)
sdat <- removeFromDataTable(rdat, non.normal, wid)
```

#### Result of normality test in the residual model

|              | var          |   n | skewness | kurtosis | symmetry | statistic | method     |     p | p.signif | normality |
|:-------------|:-------------|----:|---------:|---------:|:---------|----------:|:-----------|------:|:---------|:----------|
| attention    | attention    | 120 |   -0.021 |   -0.918 | YES      |    10.675 | D’Agostino | 0.005 | \*       | QQ        |
| relevance    | relevance    | 121 |    0.113 |   -0.693 | YES      |     4.005 | D’Agostino | 0.135 | ns       | QQ        |
| confidence   | confidence   | 116 |   -0.396 |   -0.691 | YES      |     6.699 | D’Agostino | 0.035 | ns       | QQ        |
| satisfaction | satisfaction | 118 |    0.136 |   -0.877 | YES      |     9.088 | D’Agostino | 0.011 | ns       | QQ        |
| motivation   | motivation   | 118 |   -0.052 |   -1.008 | YES      |    15.591 | D’Agostino | 0.000 | \*\*     | QQ        |

#### Result of normality test in each group

This is an optional validation and only valid for groups with number
greater than 30 observations

| condition | variable     |   n |  mean | median |   min |   max |    sd |    se |    ci |   iqr | normality | method       | statistic |     p | p.signif |
|:----------|:-------------|----:|------:|-------:|------:|------:|------:|------:|------:|------:|:----------|:-------------|----------:|------:|:---------|
| control   | attention    |  38 | 3.822 |  3.833 | 2.821 | 4.754 | 0.588 | 0.095 | 0.193 | 0.854 | YES       | Shapiro-Wilk |     0.947 | 0.071 | ns       |
| inBoost   | attention    |  50 | 3.565 |  3.583 | 2.587 | 4.629 | 0.604 | 0.085 | 0.172 | 0.831 | YES       | Shapiro-Wilk |     0.957 | 0.069 | ns       |
| inThreat  | attention    |  32 | 3.891 |  3.917 | 2.896 | 4.829 | 0.556 | 0.098 | 0.200 | 0.767 | YES       | Shapiro-Wilk |     0.967 | 0.415 | ns       |
| control   | relevance    |  40 | 3.255 |  3.222 | 2.328 | 4.344 | 0.559 | 0.088 | 0.179 | 0.611 | YES       | Shapiro-Wilk |     0.963 | 0.219 | ns       |
| inBoost   | relevance    |  49 | 3.173 |  3.111 | 2.006 | 4.531 | 0.750 | 0.107 | 0.215 | 1.000 | YES       | Shapiro-Wilk |     0.956 | 0.066 | ns       |
| inThreat  | relevance    |  32 | 3.415 |  3.389 | 2.125 | 4.556 | 0.721 | 0.127 | 0.260 | 0.917 | YES       | Shapiro-Wilk |     0.956 | 0.211 | ns       |
| control   | confidence   |  37 | 3.466 |  3.667 | 2.444 | 4.222 | 0.484 | 0.079 | 0.161 | 0.764 | YES       | Shapiro-Wilk |     0.944 | 0.060 | ns       |
| inBoost   | confidence   |  48 | 3.567 |  3.667 | 2.444 | 4.444 | 0.543 | 0.078 | 0.158 | 0.694 | YES       | Shapiro-Wilk |     0.956 | 0.070 | ns       |
| inThreat  | confidence   |  31 | 3.767 |  3.667 | 2.889 | 4.444 | 0.487 | 0.087 | 0.179 | 0.778 | YES       | Shapiro-Wilk |     0.935 | 0.060 | ns       |
| control   | satisfaction |  40 | 1.412 |  1.414 | 1.080 | 1.782 | 0.204 | 0.032 | 0.065 | 0.303 | YES       | Shapiro-Wilk |     0.953 | 0.094 | ns       |
| inBoost   | satisfaction |  46 | 1.503 |  1.565 | 1.080 | 1.956 | 0.255 | 0.038 | 0.076 | 0.380 | YES       | Shapiro-Wilk |     0.953 | 0.063 | ns       |
| inThreat  | satisfaction |  32 | 1.421 |  1.414 | 1.080 | 1.909 | 0.244 | 0.043 | 0.088 | 0.356 | YES       | Shapiro-Wilk |     0.942 | 0.087 | ns       |
| control   | motivation   |  40 | 3.630 |  3.576 | 2.913 | 4.402 | 0.449 | 0.071 | 0.144 | 0.632 | YES       | Shapiro-Wilk |     0.959 | 0.156 | ns       |
| inBoost   | motivation   |  46 | 3.483 |  3.431 | 2.551 | 4.426 | 0.552 | 0.081 | 0.164 | 0.934 | YES       | Shapiro-Wilk |     0.955 | 0.074 | ns       |
| inThreat  | motivation   |  32 | 3.753 |  3.771 | 2.760 | 4.527 | 0.517 | 0.091 | 0.187 | 0.751 | YES       | Shapiro-Wilk |     0.959 | 0.260 | ns       |

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

|              | var          | method        | formula                     |   n | df1 | df2 | statistic |     p | p.signif |
|:-------------|:-------------|:--------------|:----------------------------|----:|----:|----:|----------:|------:|:---------|
| attention    | attention    | Levene’s test | `attention`\~`condition`    | 120 |   2 | 117 |     0.212 | 0.809 | ns       |
| relevance    | relevance    | Levene’s test | `relevance`\~`condition`    | 121 |   2 | 118 |     1.837 | 0.164 | ns       |
| confidence   | confidence   | Levene’s test | `confidence`\~`condition`   | 116 |   2 | 113 |     0.182 | 0.834 | ns       |
| satisfaction | satisfaction | Levene’s test | `satisfaction`\~`condition` | 118 |   2 | 115 |     1.761 | 0.176 | ns       |
| motivation   | motivation   | Levene’s test | `motivation`\~`condition`   | 118 |   2 | 115 |     1.572 | 0.212 | ns       |

## Saving the Data with Normal Distribution Used for Performing ANOVA test

``` r
ndat <- sdat[[1]]
for (dv in names(sdat)[-1]) ndat <- merge(ndat, sdat[[dv]])
write.csv(ndat, paste0("../data/table-with-normal-distribution.csv"))
```

Descriptive statistics of data with normal distribution

|                | condition | variable     |   n |  mean | median |   min |   max |    sd |    se |    ci |   iqr |
|:---------------|:----------|:-------------|----:|------:|-------:|------:|------:|------:|------:|------:|------:|
| attention.1    | control   | attention    |  38 | 3.822 |  3.833 | 2.821 | 4.754 | 0.588 | 0.095 | 0.193 | 0.854 |
| attention.2    | inBoost   | attention    |  50 | 3.565 |  3.583 | 2.587 | 4.629 | 0.604 | 0.085 | 0.172 | 0.831 |
| attention.3    | inThreat  | attention    |  32 | 3.891 |  3.917 | 2.896 | 4.829 | 0.556 | 0.098 | 0.200 | 0.767 |
| relevance.1    | control   | relevance    |  40 | 3.255 |  3.222 | 2.328 | 4.344 | 0.559 | 0.088 | 0.179 | 0.611 |
| relevance.2    | inBoost   | relevance    |  49 | 3.173 |  3.111 | 2.006 | 4.531 | 0.750 | 0.107 | 0.215 | 1.000 |
| relevance.3    | inThreat  | relevance    |  32 | 3.415 |  3.389 | 2.125 | 4.556 | 0.721 | 0.127 | 0.260 | 0.917 |
| confidence.1   | control   | confidence   |  37 | 3.466 |  3.667 | 2.444 | 4.222 | 0.484 | 0.079 | 0.161 | 0.764 |
| confidence.2   | inBoost   | confidence   |  48 | 3.567 |  3.667 | 2.444 | 4.444 | 0.543 | 0.078 | 0.158 | 0.694 |
| confidence.3   | inThreat  | confidence   |  31 | 3.767 |  3.667 | 2.889 | 4.444 | 0.487 | 0.087 | 0.179 | 0.778 |
| satisfaction.1 | control   | satisfaction |  40 | 1.412 |  1.414 | 1.080 | 1.782 | 0.204 | 0.032 | 0.065 | 0.303 |
| satisfaction.2 | inBoost   | satisfaction |  46 | 1.503 |  1.565 | 1.080 | 1.956 | 0.255 | 0.038 | 0.076 | 0.380 |
| satisfaction.3 | inThreat  | satisfaction |  32 | 1.421 |  1.414 | 1.080 | 1.909 | 0.244 | 0.043 | 0.088 | 0.356 |
| motivation.1   | control   | motivation   |  40 | 3.630 |  3.576 | 2.913 | 4.402 | 0.449 | 0.071 | 0.144 | 0.632 |
| motivation.2   | inBoost   | motivation   |  46 | 3.483 |  3.431 | 2.551 | 4.426 | 0.552 | 0.081 | 0.164 | 0.934 |
| motivation.3   | inThreat  | motivation   |  32 | 3.753 |  3.771 | 2.760 | 4.527 | 0.517 | 0.091 | 0.187 | 0.751 |

![](anova_files/figure-gfm/unnamed-chunk-18-1.png)<!-- -->![](anova_files/figure-gfm/unnamed-chunk-18-2.png)<!-- -->![](anova_files/figure-gfm/unnamed-chunk-18-3.png)<!-- -->![](anova_files/figure-gfm/unnamed-chunk-18-4.png)<!-- -->![](anova_files/figure-gfm/unnamed-chunk-18-5.png)<!-- -->

## Computation of ANOVA test and Pairwise Comparison

### ANOVA test

| var          | Effect    | DFn | DFd |   SSn |    SSd |     F |     p |   ges | p.signif |
|:-------------|:----------|----:|----:|------:|-------:|------:|------:|------:|:---------|
| attention    | condition |   2 | 117 | 2.522 | 40.254 | 3.665 | 0.029 | 0.059 | \*       |
| relevance    | condition |   2 | 118 | 1.141 | 55.313 | 1.217 | 0.300 | 0.020 | ns       |
| confidence   | condition |   2 | 113 | 1.567 | 29.418 | 3.009 | 0.053 | 0.051 | ns       |
| satisfaction | condition |   2 | 115 | 0.213 |  6.413 | 1.908 | 0.153 | 0.032 | ns       |
| motivation   | condition |   2 | 115 | 1.404 | 29.898 | 2.699 | 0.072 | 0.045 | ns       |

### Pairwise comparison

| var          | group1  | group2   | estimate | conf.low | conf.high |    se | statistic |     p | p.adj | p.adj.signif |
|:-------------|:--------|:---------|---------:|---------:|----------:|------:|----------:|------:|------:|:-------------|
| attention    | control | inBoost  |    0.258 |    0.008 |     0.508 | 0.126 |     2.040 | 0.044 | 0.131 | ns           |
| attention    | control | inThreat |   -0.069 |   -0.348 |     0.210 | 0.141 |    -0.491 | 0.624 | 1.000 | ns           |
| attention    | inBoost | inThreat |   -0.327 |   -0.590 |    -0.064 | 0.133 |    -2.460 | 0.015 | 0.046 | \*           |
| relevance    | control | inBoost  |    0.082 |   -0.207 |     0.371 | 0.146 |     0.563 | 0.575 | 1.000 | ns           |
| relevance    | control | inThreat |   -0.160 |   -0.482 |     0.161 | 0.162 |    -0.986 | 0.326 | 0.978 | ns           |
| relevance    | inBoost | inThreat |   -0.242 |   -0.550 |     0.066 | 0.156 |    -1.557 | 0.122 | 0.367 | ns           |
| confidence   | control | inBoost  |   -0.101 |   -0.322 |     0.120 | 0.112 |    -0.907 | 0.366 | 1.000 | ns           |
| confidence   | control | inThreat |   -0.301 |   -0.547 |    -0.055 | 0.124 |    -2.424 | 0.017 | 0.051 | ns           |
| confidence   | inBoost | inThreat |   -0.200 |   -0.433 |     0.033 | 0.118 |    -1.700 | 0.092 | 0.275 | ns           |
| satisfaction | control | inBoost  |   -0.091 |   -0.192 |     0.010 | 0.051 |    -1.779 | 0.078 | 0.234 | ns           |
| satisfaction | control | inThreat |   -0.009 |   -0.120 |     0.102 | 0.056 |    -0.163 | 0.871 | 1.000 | ns           |
| satisfaction | inBoost | inThreat |    0.082 |   -0.026 |     0.189 | 0.054 |     1.503 | 0.136 | 0.407 | ns           |
| motivation   | control | inBoost  |    0.146 |   -0.072 |     0.365 | 0.110 |     1.327 | 0.187 | 0.561 | ns           |
| motivation   | control | inThreat |   -0.123 |   -0.363 |     0.116 | 0.121 |    -1.018 | 0.311 | 0.933 | ns           |
| motivation   | inBoost | inThreat |   -0.269 |   -0.502 |    -0.037 | 0.117 |    -2.295 | 0.024 | 0.071 | ns           |

### Descriptive Statistic of Estimated Marginal Means

| var          | condition |   n | emmean |  mean | conf.low | conf.high |    sd | sd.emms | se.emms |
|:-------------|:----------|----:|-------:|------:|---------:|----------:|------:|--------:|--------:|
| attention    | control   |  38 |  3.822 | 3.822 |    3.634 |     4.011 | 0.588 |   0.587 |   0.095 |
| attention    | inBoost   |  50 |  3.565 | 3.565 |    3.400 |     3.729 | 0.604 |   0.587 |   0.083 |
| attention    | inThreat  |  32 |  3.891 | 3.891 |    3.686 |     4.097 | 0.556 |   0.587 |   0.104 |
| confidence   | control   |  37 |  3.466 | 3.466 |    3.300 |     3.632 | 0.484 |   0.510 |   0.084 |
| confidence   | inBoost   |  48 |  3.567 | 3.567 |    3.421 |     3.713 | 0.543 |   0.510 |   0.074 |
| confidence   | inThreat  |  31 |  3.767 | 3.767 |    3.585 |     3.949 | 0.487 |   0.510 |   0.092 |
| motivation   | control   |  40 |  3.630 | 3.630 |    3.470 |     3.789 | 0.449 |   0.510 |   0.081 |
| motivation   | inBoost   |  46 |  3.483 | 3.483 |    3.334 |     3.632 | 0.552 |   0.510 |   0.075 |
| motivation   | inThreat  |  32 |  3.753 | 3.753 |    3.574 |     3.931 | 0.517 |   0.510 |   0.090 |
| relevance    | control   |  40 |  3.255 | 3.255 |    3.040 |     3.469 | 0.559 |   0.685 |   0.108 |
| relevance    | inBoost   |  49 |  3.173 | 3.173 |    2.979 |     3.366 | 0.750 |   0.685 |   0.098 |
| relevance    | inThreat  |  32 |  3.415 | 3.415 |    3.175 |     3.655 | 0.721 |   0.685 |   0.121 |
| satisfaction | control   |  40 |  1.412 | 1.412 |    1.338 |     1.486 | 0.204 |   0.236 |   0.037 |
| satisfaction | inBoost   |  46 |  1.503 | 1.503 |    1.434 |     1.572 | 0.255 |   0.236 |   0.035 |
| satisfaction | inThreat  |  32 |  1.421 | 1.421 |    1.338 |     1.504 | 0.244 |   0.236 |   0.042 |

### Anova plots for the dependent variable “attention”

``` r
plots <- oneWayAnovaPlots(sdat[["attention"]], "attention", between, aov[["attention"]], pwc[["attention"]], c("jitter"), font.label.size=14, step.increase=0.25)
```

#### Plot of “attention” based on “condition”

``` r
plots[["condition"]]
```

![](anova_files/figure-gfm/unnamed-chunk-26-1.png)<!-- -->

### Anova plots for the dependent variable “relevance”

``` r
plots <- oneWayAnovaPlots(sdat[["relevance"]], "relevance", between, aov[["relevance"]], pwc[["relevance"]], c("jitter"), font.label.size=14, step.increase=0.25)
```

#### Plot of “relevance” based on “condition”

``` r
plots[["condition"]]
```

![](anova_files/figure-gfm/unnamed-chunk-28-1.png)<!-- -->

### Anova plots for the dependent variable “confidence”

``` r
plots <- oneWayAnovaPlots(sdat[["confidence"]], "confidence", between, aov[["confidence"]], pwc[["confidence"]], c("jitter"), font.label.size=14, step.increase=0.25)
```

#### Plot of “confidence” based on “condition”

``` r
plots[["condition"]]
```

![](anova_files/figure-gfm/unnamed-chunk-30-1.png)<!-- -->

### Anova plots for the dependent variable “satisfaction”

``` r
plots <- oneWayAnovaPlots(sdat[["satisfaction"]], "satisfaction", between, aov[["satisfaction"]], pwc[["satisfaction"]], c("jitter"), font.label.size=14, step.increase=0.25)
```

#### Plot of “satisfaction” based on “condition”

``` r
plots[["condition"]]
```

![](anova_files/figure-gfm/unnamed-chunk-32-1.png)<!-- -->

### Anova plots for the dependent variable “motivation”

``` r
plots <- oneWayAnovaPlots(sdat[["motivation"]], "motivation", between, aov[["motivation"]], pwc[["motivation"]], c("jitter"), font.label.size=14, step.increase=0.25)
```

#### Plot of “motivation” based on “condition”

``` r
plots[["condition"]]
```

![](anova_files/figure-gfm/unnamed-chunk-34-1.png)<!-- -->

### Textual Report

ANOVA tests with independent between-subjects variables “condition”
(control, inBoost, inThreat) were performed to determine statistically
significant difference on the dependent varibles “attention”,
“relevance”, “confidence”, “satisfaction”, “motivation”. For the
dependent variable “attention”, there was statistically significant
effects in the factor “condition” with F(2,117)=3.665, p=0.029 and
ges=0.059 (effect size). For the dependent variable “relevance”, there
was not statistically significant effects. For the dependent variable
“confidence”, there was not statistically significant effects. For the
dependent variable “satisfaction”, there was not statistically
significant effects. For the dependent variable “motivation”, there was
not statistically significant effects.

Pairwise comparisons using the Estimated Marginal Means (EMMs) were
computed to find statistically significant diferences among the groups
defined by the independent variables, and with the p-values ajusted by
the method “bonferroni”. For the dependent variable “attention”, the
mean in the condition=“inBoost” (adj M=3.565 and SD=0.604) was
significantly different than the mean in the condition=“inThreat” (adj
M=3.891 and SD=0.556) with p-adj=0.046.

## Tips and References

-   Use the site <https://www.tablesgenerator.com> to convert the HTML
    tables into Latex format

-   \[2\]: Miot, H. A. (2017). Assessing normality of data in clinical
    and experimental trials. J Vasc Bras, 16(2), 88-91.

-   \[3\]: Bárány, Imre; Vu, Van (2007). “Central limit theorems for
    Gaussian polytopes”. Annals of Probability. Institute of
    Mathematical Statistics. 35 (4): 1593–1621.